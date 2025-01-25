#!/data/data/com.termux/files/usr/bin/bash

#Description: All custom alias by Dv
# ----------- #

#alias para execurar script home.home
#este ficheiro é o autorun do termux, nao?

#como alias n serve para mais do que uma tarefa ao mesmo tempo, então temos de usar funçoes

#1. Fazer uma pasta em temp para listar tudo o que EU tenho na pasta home (\ls home)=lshome.txt)
#de "ls home"
#para /temp/.temp && echo ls home > lshome.txt && 

#faz cripts de fileiras de && && && && && && e intruduz um espiao %% && && && &&
#&& %% &&

#if you add another alias, make sure you also send an echo to the external list for fast reading
#the external list is at ./list_of_alias.txt
#example:
#$ alias blabla="clear"
#$ echo "blabla (clear) #it simply clears the screenof the terminal" >> .list_of_alias.txt

echo "all alias from Dv are read"

alias l='ls -l'
alias 1="ls -1"
alias a="ls -a"
alias .="ls"
alias ..="cd .."

alias A="ls -A"
echo "A	(la -A)	#List almost all" > ./list_of_alias.txt

alias cl='clear'

h () {
	clear
	cd ~
	pwd
	echo
	ls
}

hh () {
	clear
	cd ~/home.home
	pwd
	echo
	ls
}

addate ()
{
/data/data/com.termux/files/home/scripts.all/Shambavi/Extras/./add_Shambavi_new_date.sh

tail -n 3 /data/data/com.termux/files/home/scripts.all/Shambavi/Extras/./shamb-dates.txt
}

addate0 ()
{
	echo "" >> ~/scripts.all/Shambavi/Extras/shamb-dates.txt
	
	tail -n 3 /data/data/com.termux/files/home/scripts.all/Shambavi/Extras/./shamb-dates.txt
}

vdate ()
{
less /data/data/com.termux/files/home/scripts.all/Shambavi/Extras/./shamb-dates.txt
}

hdj ()
{
	clear
	cd /data/data/com.termux/files/home/home.home/.home.home/Djarvis-Project
	pwd
	echo
	ls
}

DJR ()
{
	clear
	head -n 9 /data/data/com.termux/files/home/home.home/.h.h/.A/intro.Djarvis.sh
}

sh ()
{
	echo "#!"${which bash} >> New.sh
	chmod -v +x ./New.sh
}


alias 3="ls"
alias 4="ls"
