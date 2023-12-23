#!/bin/bash
if [ "$EUID" -ne 0 ]
	then echo -e "Please run the script as root, or using sudo\n"
	exit
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"
echo -e "Starting the installer...\n"
echo -e -n "The installer is running within the path: $PWD\n\n" 

CONFIRM="n"
cat ./welcome.txt
echo -n "(1. Container Deployment/2. Standard Server): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

general_installation() {
	chmod +x ./.global/*.sh
	chmod +x ./docker/*.sh
	chmod +x ./standard/*.sh
	apt update
	./.global/reset_cache_to_install_node.sh
	./.global/update_apt_repo.sh
	# Check the exit status
	if [ $? -eq 0 ]; then
		echo "[RLABS APT CP] APT Processes is finished."
	else
		echo "[RLABS APT CP] APT Processes is failed. Failing the installer..."
		exit
	fi
	
	./.global/install_pip_npm.sh
	# Check the exit status
	if [ $? -eq 0 ]; then
		echo "[RLABS PIP+NPM CP] PIP+NPM Processes is finished."
	else
		echo "[RLABS PIP+NPM CP] PIP+NPM Processes is failed. Failing the installer..."
		exit
	fi
	
	./.global/copy-configs.sh
	# Check the exit status
	if [ $? -eq 0 ]; then
		echo "[RLABS CF CP] Configuration copying is finished."
	else
		echo "[RLABS CF CP] Configuration copying is failed. Failing the installer..."
		exit
	fi
}

echo

if [[ "${CONFIRM}" =~ ^[1]$ ]]; then
	general_installation
	./docker/docker_install.sh
	echo -e -n "[RLABS Docker Installation] The installation is finished!"
else
	if [[ "${CONFIRM}" =~ ^[2]$ ]]; then
	    general_installation
		./standard/standard_install.sh
		echo -e -n "[RLABS Standard Installation] The installation is finished!"
	else
		echo "Installation aborted!"
	fi
fi
