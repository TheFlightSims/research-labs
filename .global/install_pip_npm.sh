#!/bin/bash

echo -e "Installing NPM Packages"
npm install -g configurable-http-proxy

echo -e "Installing pre-builds"
pip install --upgrade pip setuptools wheel manimlib pycairo

echo -e "Installing PIP Packages"
pip install ./.global/jupyter-ext-pkg/* --ignore-installed

echo -e "Upgrading PIP Packages"
pip install -r ./.global/pip_packages.txt
jupyter lab build

echo -e "Disabling the classic mode"
jupyter labextension disable @jupyterlab/extensionmanager-extension
jupyter labextension disable @jupyterlab/help-extension:launch-classic
jupyter labextension update --all

echo -e "Cleaning up caches..."
apt autoremove -y
pip cache purge
