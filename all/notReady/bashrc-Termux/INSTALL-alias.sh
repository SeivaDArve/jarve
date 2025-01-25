#!/bin/bash

#This script will install alias on Termux

#making a folder in which files will be copyed
mkdir -p ~/.h.h/etc/alias

#copy ALL files in present directory to Home
cp -u ./* ~/.h.h/etc/alias


echo "Are you installing or updating termux alias?"
echo "(i)nstalling; (u)pdating; (a)dding; (e)xit"
read answer



#this link explains something usefull to install alias at .bashrc:
#https://stackoverflow.com/questions/4749330/how-to-test-if-string-exists-in-file-with-bash
#Installing at .bashrc
isInFile=$(cat ~/.bashrc | grep -c "#check 1")


if [ $isInFile -eq 0 ]; then
   echo ""
   echo "INSTALL-alias:"
   echo "#check 1: not contained in .bashrc"
   echo "New text will replace it"
   echo "copying alias link to .bashrc"
   echo ""

	echo "" >> ~/.bashrc
	echo "#adding all termux alias from juicyDRYgeek:" >> ~/.bashrc
	echo "#check 1" >> ~/.bashrc
	echo "source ~/.h.h/etc/alias/all_termux_alias.sh" >> ~/.bashrc
	echo "" >> ~/.bashrc

   echo "done"

else

   echo ""
   echo "INSTALL-alias:"
   echo "#check 1: exists in .bashrc at least once"
   echo "not doing anything"
   echo "besides copying files to ~/.h.h/etc/alias"
   echo ""
fi

#Make new changes available:
source ~/.bashrc
