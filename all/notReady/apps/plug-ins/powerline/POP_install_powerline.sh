#!/bin/bash

#-----------------------------
#Install powerline normally
sudo apt install powerline powerline-fonts

#make powerline as default using ~/.bashrc
cat ./powerline_.bashrc_config.txt >> ~/.bashrc

#-----------------------------

#To add towerline to vim:
sudo apt install vim-powerline

#make powerline as default at vim using ~/.vimrc
cat ./powerline_.vimrc_config.txt >> ~/.vimrc

#-----------------------------
#Open a new terminal
gnome-terminal
#close this one
exit
