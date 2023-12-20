#!/bin/bash
CONFIRM="n"
cat ./welcome.txt
echo -n "(1. Container Deployment/2. Standard Server): "
read -n 1 CONFIRM_INPUT
if [ -n "$CONFIRM_INPUT" ]; then
	CONFIRM=$CONFIRM_INPUT
fi

echo

if [[ "${CONFIRM}" =~ ^[1]$ ]]; then
	echo "Container Deployment Option!"
else
	if [[ "${CONFIRM}" =~ ^[2]$ ]]; then
		echo "Standtard Server Option!"
	else
		echo "Installation aborted!"
	fi
fi
