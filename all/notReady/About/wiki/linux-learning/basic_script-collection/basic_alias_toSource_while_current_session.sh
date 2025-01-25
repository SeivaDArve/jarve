#!/data/data/com.termux/files/usr/bin/bash

# If you create functions
# without calling them
# in this kind of bash script
# and source this file
# you will have all these functions
# available while the current
# session is going

# if you want these functions
# permanently
# the put 
#$ source "This file" at .bashrc

testvar () 
{
	echo "funciona"
}


# in the end, if you type
#$ testvar
# at the terminal, it will execute
#$ funciona
