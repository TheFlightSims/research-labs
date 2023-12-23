#!/bin/bash

echo -e "Copying default SQLite"
cp ./docker/res/jupyterhub.sqlite /etc/jupyter/

echo -e "Copying standard configurations"
cp ./docker/res/config.py /etc/jupyter/config.py

chmod 700 /etc/jupyter
