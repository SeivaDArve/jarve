#!/usr/bin/bash

#this is an alias to put inside ~/.bashrc (many ways are possible):
#if you want to try this alias without opening .bashrc then simply source this file:
# $ source <name_of_this_file>

#you can simply copy this function inside .bashrc too

#There are many File Manager to Linux (Files, Nautilus, Dolphin). 
#if you have Files installed, then you can open any folder from the terminal using $ xdg-open path/to/the/folder

#this script is an alias to do that faster combining "xdg-open" + "pwd" = OPEN (WARNING: "xdg-open $(pwd)" does not always work)
#example where "xdg-open $(pwd)" does not work:
# dv-popos@pop-os:/media/dv-popos/DvHDD3-p1$ cd A-\ Multimedia/
# dv-popos@pop-os:/media/dv-popos/DvHDD3-p1/A- Multimedia$ xdg-open $(pwd)
# xdg-open: unexpected argument 'Multimedia'
# Try 'xdg-open --help' for more information.


#To correct all this, just use 
#$ .
#instead of
#$ "$(pwd)"
#RESULT:
#$ "xdg-open ."
#---------------------------------------------------------------

#At the Terminal, simply type OPEN and this script will open 'Files' file manager at the current folder
function OPEN ()
{
	xdg-open .
}

#---------------------------------------------------------------
#Now, this situation works:
# dv-popos@pop-os:/media/dv-popos/DvHDD3-p1/A- Multimedia$ xdg-open .
