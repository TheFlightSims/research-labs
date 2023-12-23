#!/bin/bash

echo -e "Installing MySQL"
apt update && apt install -y mysql-server

# Prepare MySQL databases
echo Preparing MySQL databases...
service mysql stop
killall -vw mysqld
mysqld_safe --skip-grant-tables >res 2>&1 &
echo 'Resetting password... hold on'
sleep 5
mysql -e "FLUSH PRIVILEGES;ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'administrator';create database jupyterdb;FLUSH PRIVILEGES;"
echo 'Cleaning up...'
rm res
killall -v mysqld
service mysql restart
echo -e "MySQL password has been reset to the default\nMySQL default root password: administrator\n\n"

echo -e "Copying MySQL Password"
cp ./standard/res/mysql_password.txt /etc/jupyter/mysql_password.txt

echo -e "Create a service for Jupyter"
cp ./standard/res/rl.service /etc/init.d/researchlabs
chmod +rwxrxrx /etc/init.d/researchlabs

echo -e "Copying standard configurations"
cp ./standard/res/config.py /etc/jupyter/config.py

chmod 700 /etc/jupyter
