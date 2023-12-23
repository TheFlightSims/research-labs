#!/bin/bash

echo -e "Updating local APT Repos"
apt update && apt full-upgrade -y

# Reseting & installing NodeJS
./.global/reset_cache_to_install_node.sh
apt install -y openssl pwgen netcat git nano nodejs yarn

# Install Compilers
apt install -y gcc g++ gdb make cmake automake zip libcurl4-gnutls-dev librtmp-dev sox ffmpeg libcairo2 libcairo2-dev libgirepository1.0-dev libhdf5-dev pari-gp

# Install Python3 and PyPI packgae manager
apt install -y python3 python3-pip python3-venv python3-build