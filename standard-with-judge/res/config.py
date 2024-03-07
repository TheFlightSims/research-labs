import os
import pwd 
import subprocess
import random
import socketserver, socket
import string

from OpenSSL import crypto
##################################################################################################
# These functions are used to provide advanced settings for JupyterHub
###############################

### Port Checker
class PortOpen:
    def check_ports(self, host = 'localhost', start_port = 800, end_port = 65510):
        for port in range(start_port, end_port + 1):
            try:
                with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                    s.settimeout(0.1)  # Set a timeout for connection attempts
                    s.connect((host, port))
                return port
            except socket.error:
                continue
    
    def __init__(self) -> None:
        self.opening_port = str(self.check_ports())
###

### MySQL Secure
class MysqlSecure:
    
    def mysql_get_password(self):
        if os.access("/etc/jupyter/mysql_password.txt", os.R_OK) == True:
            file_path = open("/etc/jupyter/mysql_password.txt", "r").read()
            if file_path.find('\n') != -1:
                return file_path[:-1]
            else:
                return file_path[:-1]
        else:
            return 'administrator'

    def mysql_connect_string(self):
        sql_connect_string = 'mysql+pymysql'
        username = 'root'
        pwd = self.mysql_get_password()
        sql_server = 'localhost'
        dbname = 'jupyterdb'
        return sql_connect_string + '://' + username + ':' + pwd + '@' + sql_server + '/' + dbname
    
    def __init__(self):
        self.sqlconnectionstring = self.mysql_connect_string()
###

### OpenSSL Secure
class RSAKey:

    def generate_rsa_key(self):
        key = crypto.PKey()
        key.generate_key(crypto.TYPE_RSA, 4096)  # You can adjust the key size as needed
        return key

    def generate_self_signed_cert(self, private_key):
        # Create a new certificate
        cert = crypto.X509()
        cert.set_serial_number(random.randint(500, 20000))
        cert.gmtime_adj_notBefore(0)
        cert.gmtime_adj_notAfter(5*365*24*60*60)  # Valid for 5 years
        cert.set_issuer(cert.get_subject())
        cert.set_pubkey(private_key)
        
        # Set subject
        subject = cert.get_subject()
        subject.CN = "*.theflightsims.tfs"  # Adjusted CN
        subject.O = "TheFlightSims"  # Organization Name
        subject.OU = "Research Labs - Asia Pacific"  # Organizational Unit Name
        subject.L = "Miami"  # City
        subject.ST = "Florida"  # State
        subject.C = "US"  # Country
        
        # Sign the certificate with the private key
        cert.sign(private_key, 'sha512')
        return cert
    
    def WriteRSAKey(self):
        keyfile = '/etc/jupyter/config.pem'  # Adjusted keyfile extension
        rsakey = self.generate_rsa_key()
        with open(keyfile, "wb") as file:  # Changed mode to write bytes
            file.write(crypto.dump_privatekey(crypto.FILETYPE_PEM, rsakey))  # Corrected variable name
        return keyfile, rsakey
        
    def WriteRSACertificate(self, sslkey):
        cert = self.generate_self_signed_cert(sslkey)
        certfile = '/etc/jupyter/ssl.cert'  # Adjusted certfile path
        with open(certfile, "wb") as file:  # Changed mode to write bytes
            file.write(crypto.dump_certificate(crypto.FILETYPE_PEM, cert))  # Corrected variable name
        return certfile

    def __init__(self) -> None:
        self.sslfile, self.sslkey = self.WriteRSAKey()
        self.sslcert = self.WriteRSACertificate(self.sslkey)
###

### Add administrators, root is not allowed
class admin_user:
    
    def get_admin_user(self):
        admin_users = set()
        for f in open('/etc/jupyter/admins.txt', 'r'):
            if f.find('#') != -1 or f == 'root' or f == 'grader-course':
                continue
            if f.find('\n') != -1:
                f = f[:-1]
            admin_users.add(f)
        return admin_users

    def __init__(self) -> None:
        self.admin_list_tuple = self.get_admin_user()
        self.admin_list_array = list(self.admin_list_tuple)
###

### Authenticate secret
def randomword(length):
   letters = string.ascii_lowercase
   return ''.join(random.choice(letters) for i in range(length))
###

### Spawn mode
def pre_spawn_hook(spawner):
    username = spawner.user.name
    try:
        '''
        Enabling the instructor mode if username is under the admin account
        Otherwise, it is student
        '''
        if username in admin_user().admin_list_tuple:
            os.system('enable_assignment_list ' + username)
            os.system('enable_course_list ' + username)
        else:
            os.system('enable_assignment_list ' + username)
        pwd.getpwnam(username)
    except KeyError:
        subprocess.check_call(['useradd', '-ms', '/bin/bash', username])
        '''
        Enabling the instructor mode if username is under the admin account
        Otherwise, it is student
        '''
        if username in admin_user().admin_list_tuple:
            os.system('enable_assignment_list ' + username)
            os.system('enable_course_list ' + username)
        else:
            os.system('enable_assignment_list ' + username)
        subprocess.check_call(['cp', '-TRv', '/etc/jupyter/tutorials-notebooks', '/home/' + username])
        os.system('chmod 707 /home/' + username + '/cpp-tutorials')
        os.system('chmod 707 /home/' + username + '/qiskit-tutorials')
###

###############################
##################################################################################################
c = get_config()

c.Authenticator.admin_users = admin_user().admin_list_tuple # Set the admins
c.Authenticator.enable_auth_state = False
c.Authenticator.auto_login_oauth2_authorize = False
c.Authenticator.manage_groups = True

c.Application.log_level = 'DEBUG'

c.CourseDirectory.root = '/home/administrator/demo_testers'

c.ConfigurableHTTPProxy.auth_token = '/etc/jupyter/proxy_auth_token'

c.CourseDirectory.root = '/home/grader-course'
c.CourseDirectory.course_id = "course"

c.PAMAuthenticator.admin_groups = {'administrators'}

c.JupyterHub.default_url = '/hub/home'
c.JupyterHub.authenticator_class = 'nativeauthenticator.NativeAuthenticator'
c.JupyterHub.api_page_default_limit = 3
c.JupyterHub.cookie_secret_file = '/etc/jupyter/jupyterhub_cookie_secret'
c.JupyterHub.db_url = MysqlSecure().sqlconnectionstring
c.JupyterHub.debug_db = True
c.JupyterHub.port = 443
c.JupyterHub.ssl_key = RSAKey().sslfile
c.JupyterHub.ssl_cert = RSAKey().sslcert
c.JupyterHub.reset_db = False
c.JupyterHub.init_spawners_timeout = 30
c.JupyterHub.terminals_enabled = False

c.JupyterHub.load_roles = [
    {
        'name': 'formgrade-course',
        'groups': ['formgrade-course'],
        'scopes': [
            'access:services!service=grader-course',
            'list:services',
            f'read:services!service=grader-course',
            'read:users'
        ],
        'users': admin_user().admin_list_array,
        'services': ['grader-course'],
        'groups': ['administrators']
    }
]

'''
c.JupyterHub.load_groups = {
    'formgrade-course': admin_user().admin_list_array
}
'''
c.JupyterHub.services = [
    {
        'name': 'grader-course',
        'url': 'http://127.0.0.1:' + PortOpen().opening_port,
        'command': [
            'jupyterhub-singleuser',
            '--debug',
        ],
        'user': 'grader-course',
        'environment': {
            # specify lab as default landing page
            'JUPYTERHUB_DEFAULT_URL': '/lab'
        },
        'cwd': '/home/grader-course',
    }
]

c.NotebookApp.terminals_enabled = False

#----------------------------
# Native Authentication behaviour
c.NativeAuthenticator.check_common_password = True
c.NativeAuthenticator.minimum_password_length = 5
c.NativeAuthenticator.allowed_failed_logins = 10
c.NativeAuthenticator.seconds_before_next_try = 60
c.NativeAuthenticator.enable_signup = True
c.NativeAuthenticator.open_signup = True
c.NativeAuthenticator.ask_email_on_signup = True
#c.NativeAuthenticator.recaptcha_key = "your key"
#c.NativeAuthenticator.recaptcha_secret = "your secret"
c.NativeAuthenticator.allow_self_approval_for = '\b[A-Za-z0-9._%+-]+@(theflightsims\.tfs|theflightsims\.onmicrosoft\.com|google\.com|gmail\.com|outlook\.com|hotmail\.com|harvard\.edu)\b'
c.NativeAuthenticator.secret_key = randomword(44)
c.NativeAuthenticator.self_approval_email = ("research-labs-system@theflightsims.tfs", "[Research Labs System] Activate your account", "Welcome to Research Labs <3\n\nYour Research Labs is just created, but not activated\nYou may need to activate by enter this activation URL into your domain where you registered: {approval_url}\n\nPlease ignore this email in case you have not registered: some one is trying to steal your credential to get an unauthorized account!\n\nHave a nice day,\nResearch Labs Team - by TheFlightSims.")
#c.NativeAuthenticator.self_approval_server = {'url': 'smtp.gmail.com', 'usr': 'myself', 'pwd': 'mypassword'}
c.NativeAuthenticator.tos = 'I agree to <a href="https://github.com/TheFlightSims/research-labs/blob/main/LICENSE" target="_blank"><b>the Research Labs licensing terms (by TheFlightSims, and all related parties)</b></a>.'
#c.NativeAuthenticator.allow_2fa = True
#----------------------------

c.Spawner.cpu_limit = 1
c.Spawner.mem_limit = '1024M'
c.Spawner.pre_spawn_hook = pre_spawn_hook
