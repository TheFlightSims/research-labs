import os, math, sys, pwd, subprocess, nativeauthenticator

##################################################################################################
# These functions are used to provide advanced settings for JupyterHub
###############################

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
        os.system('chmod 707 /home/' + username + '/cpp-tutorials')
        os.system('chmod 707 /home/' + username + '/qiskit-tutorials')
###

###############################
##################################################################################################
c = get_config()

c.Authenticator.admin_users = admin_user()
c.Authenticator.enable_auth_state = False
c.Authenticator.auto_login_oauth2_authorize = False
c.Authenticator.manage_groups = True

c.Application.log_level = 'DEBUG'

c.ConfigurableHTTPProxy.auth_token = '/etc/jupyter/proxy_auth_token'

c.PAMAuthenticator.admin_groups = {'administrators'}

c.JupyterHub.authenticator_class = 'nativeauthenticator.NativeAuthenticator'
c.JupyterHub.api_page_default_limit = 3
c.JupyterHub.cookie_secret_file = '/etc/jupyter/jupyterhub_cookie_secret'
c.JupyterHub.default_url = '/hub/home'
c.JupyterHub.db_url = 'sqlite:////etc//jupyter//jupyterhub.sqlite'
c.JupyterHub.debug_db = True
c.JupyterHub.port = 80
#c.JupyterHub.ssl_key = '/etc/jupyter/ssl.key'
#c.JupyterHub.ssl_cert = '/etc/jupyter/ssl.cert'
c.JupyterHub.reset_db = False
c.JupyterHub.init_spawners_timeout = 60
c.JupyterHub.terminals_enabled = False

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
c.NativeAuthenticator.secret_key = "MIICXQIBAAKBgQCk6IbNqZxLL411NubWLZEy5LELMV9+"
#c.NativeAuthenticator.self_approval_email = ("from", "subject", "email body, including https://example.com{approval_url}")
#c.NativeAuthenticator.self_approval_server = {'url': 'smtp.gmail.com', 'usr': 'myself', 'pwd': 'mypassword'}
c.NativeAuthenticator.tos = 'I agree to <a href="https://github.com/TheFlightSims/research-labs/blob/main/LICENSE" target="_blank"><b>the Research Labs licensing terms (by TheFlightSims, and all related parties)</b></a>.'
#c.NativeAuthenticator.allow_2fa = True
#----------------------------

c.Spawner.cpu_limit = 1
c.Spawner.mem_limit = '512M'
c.Spawner.pre_spawn_hook = pre_spawn_hook
