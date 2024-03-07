#!/bin/bash

echo -e "Create a service for Jupyter"
cp ./standard-with-judge/res/rl.service /etc/init.d/researchlabs
chmod +rwxrxrx /etc/init.d/researchlabs

# Install Notebook Grader
pip install -r ./standard-with-judge/pip_packages.txt
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

echo -e "Copying standard configurations"
cp ./standard-with-judge/res/config.py /etc/jupyter/config.py
cp ./standard-with-judge/res/global_nbgrader_config.py /etc/jupyter/global_nbgrader_config.py
cp ./standard-with-judge/res/course_nbgrader_config.py /etc/jupyter/course_nbgrader_config.py

echo -n "Please enter your MySQL locally password: "
read -n 100 PWD_INP
if [ -n "$PWD_INP" ]; then
	PWD="$PWD_INP"
fi

echo -e "Copying MySQL Password"
echo "$PWD" > /etc/jupyter/mysql_password.txt

# Assign grader-course (submitting system) 
useradd -ms /bin/bash -d /home/grader-course grader-course
setup_nbgrader grader-course /etc/jupyter/course_nbgrader_config.py
create_course grader-course course
enable_create_assignment grader-course
enable_formgrader grader-course

chmod 700 /etc/jupyter