import os, math, sys, pwd, subprocess, pymysql, nativeauthenticator

##################################################################################################
# These functions are used to provide advanced settings for JupyterHub
###############################

### Tuple to String
def convertTuple(tup):
        # initialize an empty string
    str = ''
    for item in tup:
        str = str + item
    return str
###

### Read MySQL password
def mysql_get_password():
    if os.access("/etc/jupyter/mysql_password.txt", os.R_OK) == True:
        file_path = open("/etc/jupyter/mysql_password.txt", "r").read()
        if file_path.find('\n') != -1:
            return file_path[:-1]
        else:
            return file_path
    else:
        return 'administrator'
###

### MySQL password - login as root
def mysql_connect_string():
    sql_connect_string = 'mysql+pymysql'
    username = 'root'
    pwd = mysql_get_password()
    sql_server = 'localhost'
    dbname = 'jupyterdb'
    return sql_connect_string + '://' + username + ':' + pwd + '@' + sql_server + '/' + dbname
###

### Allow users in database, root is not allowed
def allowed_users():
    admin_users = set()
    for f in open('/etc/jupyter/allow_users.txt', 'r'):
        if f.find('#') != -1 or f == 'root':
            continue
        if f.find('\n') != -1:
            f = f[:-1]
        admin_users.add(f)
    return admin_users
###

### Add administrators, root is not allowed
def admin_user():
    admin_users = set()
    for f in open('/etc/jupyter/admins.txt', 'r'):
        if f.find('#') != -1 or f == 'root':
            continue
        if f.find('\n') != -1:
            f = f[:-1]
        admin_users.add(f)
    return admin_users
###

### Spawn mode
def pre_spawn_hook(spawner):
    username = spawner.user.name
    try:
        pwd.getpwnam(username)
    except KeyError:
        subprocess.check_call(['useradd', '-ms', '/bin/bash', username])
        subprocess.check_call(['cp', '-TRv', '/etc/jupyter/tutorials-notebooks', '/home/' + username])
        subprocess.check_call(['chmod', '777', '/home/' + username + '/*'])
###

###############################
##################################################################################################
c = get_config()

c.Authenticator.admin_users = admin_user()
c.Authenticator.allowed_users = allowed_users()
c.Authenticator.enable_auth_state = False
c.Authenticator.auto_login_oauth2_authorize = False
c.Authenticator.manage_groups = True

c.Application.log_level = 'DEBUG'

c.ConfigurableHTTPProxy.auth_token = '/etc/jupyter/proxy_auth_token'

c.PAMAuthenticator.admin_groups = {'administrators'}

c.JupyterHub.authenticator_class = 'nativeauthenticator.NativeAuthenticator'
c.JupyterHub.api_page_default_limit = 3
c.JupyterHub.cookie_secret_file = '/etc/jupyter/jupyterhub_cookie_secret'
c.JupyterHub.db_url = mysql_connect_string()
c.JupyterHub.debug_db = True
c.JupyterHub.port = 443
c.JupyterHub.ssl_key = '/etc/jupyter/ssl.key'
c.JupyterHub.ssl_cert = '/etc/jupyter/ssl.cert'
c.JupyterHub.reset_db = False
c.JupyterHub.init_spawners_timeout = 60
c.JupyterHub.terminals_enabled = False

c.NotebookApp.terminals_enabled = False

#----------------------------
# Native Authentication behaviour
c.NativeAuthenticator.check_common_password = True
c.NativeAuthenticator.minimum_password_length = 5
c.NativeAuthenticator.allowed_failed_logins = 10
c.NativeAuthenticator.seconds_before_next_try = 600
#c.NativeAuthenticator.enable_signup = False
c.NativeAuthenticator.open_signup = True
c.NativeAuthenticator.ask_email_on_signup = True
#c.NativeAuthenticator.recaptcha_key = "your key"
#c.NativeAuthenticator.recaptcha_secret = "your secret"
#c.NativeAuthenticator.allow_self_approval_for = '[^@]+@example\.com$'
#c.NativeAuthenticator.secret_key = "your-arbitrary-key"
#c.NativeAuthenticator.self_approval_email = ("from", "subject", "email body, including https://example.com{approval_url}")
#c.NativeAuthenticator.self_approval_server = {'url': 'smtp.gmail.com', 'usr': 'myself', 'pwd': 'mypassword'}
c.NativeAuthenticator.tos = 'I agree to <a href="https://github.com/TheFlightSims/research-labs/blob/main/LICENSE" target="_blank"><b>the Research Labs licensing terms (by TheFlightSims, and all related parties)</b></a>, as well as the terms of the Research Labs cloud service provider.'
#c.NativeAuthenticator.allow_2fa = True
#----------------------------

c.Spawner.cpu_limit = 1
c.Spawner.mem_limit = '1024M'
c.Spawner.pre_spawn_hook = pre_spawn_hook
c.Spawner.default_url = '/lab'
