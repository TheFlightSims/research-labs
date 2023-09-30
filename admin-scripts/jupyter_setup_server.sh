#!/bin/bash
CONFIRM="n"
echo -n "Enable Research Labs on this server. Continue? (y/N): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	echo Enabling the Jupyter Lab on this server
	sleep 10
	echo Creating Jupyter secures and enviroments, not Jupyter and its cores...
	
	apt update && apt full-upgrade -y
	apt install -y openssl pwgen netcat git nano

	# Install NodeJS, Npm and Native Authenticator 
	echo -e "Installing NodeJS..."
	~/admin-scripts/reset_cache_to_install_node.sh
	apt install -y nodejs yarn
	
	# Install compliers (GCC, G++, MAKE and ninja-build), remoting (OpenSSH), Password Generator, Network diagnostics and OpenAl library.
	# Also install NVIDIA Drivers and CUDA compliers for users whom WSL2 installed.
	# Usefull when you use further application, build from source (e.g. install from source from GitHub).
	echo -e "Installing compliers..."
	apt install -y gcc g++ gdb make cmake automake ninja-build rsync zip
	apt install -y libopenal1 libcurl4-gnutls-dev librtmp-dev sox ffmpeg libcairo2 libcairo2-dev libgirepository1.0-dev

	# NVIDIA drivers and compilers
	apt install -y nvidia-utils-535-server
	
	# Install Python3 and PyPI packgae manager
	apt install -y python3 python3-pip

	# Install MySQL Server
	apt install -y mysql-server
	
	# Copy configuration to environment folder
	echo -e "Copy configurations to folder..."
	mkdir /etc/jupyter/
	cp ~/admin-scripts/admins.txt /etc/jupyter/admins.txt
	cp ~/admin-scripts/allow_users.txt /etc/jupyter/allow_users.txt
	cp ~/admin-scripts/mysql_password.txt /etc/jupyter/mysql_password.txt
	cp ~/admin-scripts/config.py /etc/jupyter/config.py
	cp ~/admin-scripts/ssl.cert /etc/jupyter/ssl.cert
	cp ~/admin-scripts/ssl.key /etc/jupyter/ssl.key
	
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
	
	# Install Configurable HTTP proxy
	npm install -g configurable-http-proxy
	
	# Install PIP pre-build packages
	pip install manimlib pymysql

	# Install additional PyPI packages
	pip install -r ~/admin-scripts/pip_packages.txt
	echo -e "Vailidating pip installations..."
	jupyter lab build
    pip check

	# Enable IBM-Q
	echo -e "Copying IBM-Q and its dependencies..."
	pip install ~/admin-scripts/external-packages/ibm_q_lab_server_extension-4.0.28-py3-none-any.whl 
	pip install ~/admin-scripts/external-packages/ibm_q_lab_ui_extensions-4.0.28-py3-none-any.whl 
	pip install ~/admin-scripts/external-packages/ibm_quantum_widgets-4.0.28-py3-none-any.whl  
	pip install ~/admin-scripts/external-packages/ibmq_jupyter_server_health_ext-0.0.1-py3-none-any.whl 
	pip install ~/admin-scripts/external-packages/jupyter_qiskit_kernel-1.0.0-py3-none-any.whl 

	# Installing kernel
	apt install -y r-cran-irdisplay r-cran-irkernel r-cran-repr
	
	# Disable legacy features (Notebook, Extension Manager) because of security issues
	echo -e "Disabling the classic mode"
	jupyter labextension disable @jupyterlab/extensionmanager-extension
	jupyter labextension disable @jupyterlab/help-extension:launch-classic

	# Create a service for jupyter
	echo -e "Create a service for Jupyter"
	cp ~/admin-scripts/rl.service /etc/init.d/researchlabs
	chmod +rwxrxrx /etc/init.d/researchlabs
	sleep 10
	echo Installing dependencies...
	
	# Re-update packages
	apt update && apt install --fix-missing -y && apt full-upgrade -y
	jupyter labextension update --all
	sleep 10

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
	
	# Write MySQL password to file, necessary for security. Can be changed in folder /etc/jupyter/config.py
	echo 'administrator' > /etc/jupyter/mysql_password.txt
	
	# Copy login folder
	echo -e "Installing Login Web Templates..."
	rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/static
	rmdir --ignore-fail-on-non-empty /usr/local/share/jupyterhub/templates
	mkdir /usr/local/share/jupyterhub/static
	mkdir /usr/local/share/jupyterhub/templates
	cp -TRv ~/admin-scripts/user-interface/hub-login/static /usr/local/share/jupyterhub/static
	cp -TRv ~/admin-scripts/user-interface/hub-login/templates /usr/local/share/jupyterhub/templates
	
	# Copy tutorial notebooks into /etc/jupyter
	echo -e "Coping tutorial notebooks into global folder..."
	mkdir /etc/jupyter/tutorials-notebooks
	cp -TRv ~/admin-scripts/tutorials-notebooks /etc/jupyter/tutorials-notebooks
	chmod 740 /etc/jupyter/tutorials-notebooks
	
	# Security in folder /etc/jupyter. See issue #11
	chmod 700 /etc/jupyter
	
	# Cleaning up
	apt autoremove -y
	echo -e "Cleaning up caches..."
	pip cache purge
	
	echo -e "\nInstalled Jupyter Lab for multiple users!\nPlease sign out to update all necessary variables!"
else
	echo "Aborted!"
fi

echo