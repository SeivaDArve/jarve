#!/bin/bash
# Title: Jarve .bashrc to redirect to usr-etc
# Description: This file does not contain .bashrc contents, it simply redirects you to your respective saved .bashrc


# How to organize usr-etc
# 1. Username
# 2. OS type
# 3. Shell
# 4. Config number (yet to ask user to input)
# Example: Dv-Termux-bash

# Prompt user if he confirms the retrieved data
# Do you confirm OS, Username, Shell?
# Do you want to assign a number to locate this config? Otherwise, a random 5 digits number will br generated and displayed

# Finding the correct file to source:
# if [ _OSTYPE=Termux + user=Dv ] then
	load Dv-Termux alias
# fi








# Other idea (merge both)
#!/bin/bash

_OS=$(OSTYPE)
_ME=$whoami
_SHELL=$SHELL

# This is the very first alias file that ~/.bashrc is going to read. configure this one to redirect to your username amd your shell

# if [ _OS + _ME + _SHELL = _UNKNOWN ] then
	load jarve standard alias and configs

# if [ _OS + _ME + _SHELL = _SOME_USER ] then
	load user configs - jarve configs
