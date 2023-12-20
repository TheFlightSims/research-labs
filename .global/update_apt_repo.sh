#!/bin/bash

echo -e "Updating local APT Repos"
apt update && apt full-upgrade -y

# Reseting & installing NodeJS
./reset_cache_to_install_node.sh
apt install -y openssl pwgen netcat git nano nodejs yarn

# Install Compilers
apt install -y gcc g++ gdb make cmake automake zip libcurl4-gnutls-dev librtmp-dev sox ffmpeg libcairo2 libcairo2-dev libgirepository1.0-dev

# Install Python3 and PyPI packgae manager
apt install -y python3 python3-pip

# Check the exit status
if [ $? -eq 0 ]; then
  echo "Installation successful. Now installing MySQL Server."
  echo "Please keep the server, do NOT change anything during the operation."
else
  echo "Installation failed. Failing all installers."
  echo -e "\n\n"
  echo "(Note) Please retry the installation, or debug the error."
fi
