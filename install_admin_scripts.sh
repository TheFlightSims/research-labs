#!/bin/bash
CONFIRM="n"
echo -e "This script requires root user to be running. \nConsider to switch to root user.\n"
echo -e -n "Install Research Labs admin-scripts for current user? (Y/n): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[Yy]$ ]]; then
	apt update && apt install zip unzip -y
	echo -e -n "\nNote that you can only use the scripts normally using root user.\n"
	# Creating folders in ~/admin-scripts
	mkdir ~/admin-scripts
	mkdir ~/admin-scripts/user-interface
	mkdir ~/admin-scripts/tutorials-notebooks
	mkdir ~/admin-scripts/external-packages

	# Copy files and folers to the right place
	cp -TRv admin-scripts  ~/admin-scripts
	cp -TRv user-interface ~/admin-scripts/user-interface
	cp -TRv tutorials-notebooks ~/admin-scripts/tutorials-notebooks
	unzip ~/admin-scripts/tutorials-notebooks/tutorials-notebooks.zip -d ~/admin-scripts/tutorials-notebooks
	cp -TRv jupyter-ext-pkg ~/admin-scripts/external-packages
	chmod +rwx ~/admin-scripts/*.sh

	# Display finished text
	echo -e -n "\nInstalled admin-scripts for active user."
else
	echo "Aborted!"
fi

echo