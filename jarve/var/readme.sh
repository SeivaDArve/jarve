# Title: Warning to the fellow Developer
# Description: About manually changing vars at directiry "var"

## ALL files inside this folder WILL BE executed. Every file is an On/OFF switch that allows 2nd party scripts to run or to do nothing. So, each file must contain inside a VARIABLE set to On or Off (boolean) or a number (integer) etc. It can be manually set (by editing these files) or can be set by external scripts who automatically read them (like jv.sh that adds a command to the CLI "jv --setVar --<name of variable> on/off")

## All scripts in this folder must follow this model:
#!/bin/bash
# Description: Set _var=on or _var=off if you want the following script to run:

_var=on
_version=1 #to allow jarve to find out if it needes to be updated
if [[ _var == "on" ]]; then 
	echo "$0 is running"
	echo "$0 ran sucessfully"
fi

if [[ _var == "off" ]]; then
	echo "$0 is not set to run"
fi
