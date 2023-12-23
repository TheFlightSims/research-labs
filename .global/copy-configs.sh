#!/bin/bash

echo -e "Copying configurations"

# Copy configuration to environment folder
echo -e "Copy configurations to folder..."
mkdir /etc/jupyter/
cp ./.global/res/admins.txt /etc/jupyter/admins.txt
cp ./.global/res/allow_users.txt /etc/jupyter/allow_users.txt
cp ./.global/res/ssl.cert /etc/jupyter/ssl.cert
cp ./.global/res/ssl.key /etc/jupyter/ssl.key

# Create cookie secret file and proxy authenticator
echo -e "Creating authenticator"
touch /etc/jupyter/proxy_auth_token
chown :sudo /etc/jupyter/proxy_auth_token
chmod g+rw /etc/jupyter/proxy_auth_token
openssl rand -hex 32 > /etc/jupyter/proxy_auth_token
touch /etc/jupyter/jupyterhub_cookie_secret
chown :sudo /etc/jupyter/jupyterhub_cookie_secret
chmod g+rw /etc/jupyter/jupyterhub_cookie_secret
openssl rand -hex 32 > /etc/jupyter/jupyterhub_cookie_secret
chmod 600 /etc/jupyter/jupyterhub_cookie_secret
chmod 600 /etc/jupyter/proxy_auth_token

echo -e "Installing Login Web Templates..."
rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/static
rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/templates
mkdir /usr/local/share/jupyterhub/static
mkdir /usr/local/share/jupyterhub/templates
cp -TRv ./.global/user-interface/hub-login /usr/local/share/jupyterhub

echo -e "Coping tutorial notebooks into global folder..."
mkdir /etc/jupyter/tutorials-notebooks
cp -TRv ./.global/tutorials-notebooks /etc/jupyter/tutorials-notebooks
chmod 740 /etc/jupyter/tutorials-notebooks