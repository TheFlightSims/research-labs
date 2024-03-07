#!/bin/bash
if [ "$EUID" -ne 0 ]
	then echo -e "Please run the script as root, or using sudo\n"
	exit
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo -e "Enabling Judge system...\n"

pip install git+https://github.com/shiroinekotfs/rlabs-judge.git
pip install -U --no-deps nbgrader rapidfuzz
pip cache purge
jupyter server extension enable nbgrader.server_extensions.formgrader
jupyter server extension enable nbgrader.server_extensions.assignment_list
jupyter server extension enable nbgrader.server_extensions.course_list
jupyter server extension enable nbgrader.server_extensions.validate_assignment
jupyter labextension enable nbgrader:formgrader
jupyter labextension enable nbgrader:assignment-list
jupyter labextension enable nbgrader:course-list
jupyter labextension enable nbgrader:create-assignment
jupyter labextension enable nbgrader:validate-assignment
jupyter labextension enable application-extension:property-inspector
jupyter labextension enable apputils-extension:splash
jupyter labextension enable extensionmanager-extension
jupyter labextension enable filebrowser-extension:share-file
jupyter labextension develop . --overwrite
jupyter server extension enable jupyterlab_judge
jlpm build
jlpm watch
jupyter lab build --minimize=False