#!/bin/bash

echo -e "Installing NPM Packages"
npm install -g configurable-http-proxy

echo -e "Installing PIP Packages"
pip install ./jupyter-ext-pkg/*

echo -e "Upgrading PIP Packages"
pip install -r pip_packages.txt
jupyter lab build

echo -e "Disabling the classic mode"
jupyter labextension disable @jupyterlab/extensionmanager-extension
jupyter labextension disable @jupyterlab/help-extension:launch-classic
jupyter labextension update --all

echo -e "Installing Login Web Templates..."
rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/static
rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/templates
mkdir /usr/local/share/jupyterhub/static
mkdir /usr/local/share/jupyterhub/templates
cp -TRv ./user-interface/hub-login /usr/local/share/jupyterhub

echo -e "Coping tutorial notebooks into global folder..."
mkdir /etc/jupyter/tutorials-notebooks
cp -TRv ./tutorials-notebooks /etc/jupyter/tutorials-notebooks
chmod 740 /etc/jupyter/tutorials-notebooks

echo -e "Cleaning up caches..."
apt autoremove -y
pip cache purge
