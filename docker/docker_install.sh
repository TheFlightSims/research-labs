#!/bin/bash

echo -e "Copying default SQLite"
cp ./res/jupyterhub.sqlite /etc/jupyter/

echo -e "Copying standard configurations"
cp ./res/config.py /etc/jupyter/config.py

chmod 700 /etc/jupyter
