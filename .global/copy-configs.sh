#!/bin/bash

echo -e "Copying configurations"

# Copy configuration to environment folder
echo -e "Copy configurations to folder..."
mkdir /etc/jupyter/
cp ./res/admins.txt /etc/jupyter/admins.txt
cp ./res/allow_users.txt /etc/jupyter/allow_users.txt
cp ./res/ssl.cert /etc/jupyter/ssl.cert
cp ./res/ssl.key /etc/jupyter/ssl.key

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
