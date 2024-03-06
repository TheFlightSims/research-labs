#!/bin/bash

echo -e "Create a service for Jupyter"
cp ./standard-with-judge/res/rl.service /etc/init.d/researchlabs
chmod +rwxrxrx /etc/init.d/researchlabs

echo -e "Copying standard configurations"
cp ./standard-with-judge/res/config.py /etc/jupyter/config.py

echo -n "Please enter your MySQL locally password: "
read -n 100 PWD_INP
if [ -n "$PWD_INP" ]; then
	PWD="$PWD_INP"
fi

echo -e "Copying MySQL Password"
echo "$PWD" > /etc/jupyter/mysql_password.txt

# test-service 
useradd -ms /bin/bash test-service

chmod 700 /etc/jupyter
