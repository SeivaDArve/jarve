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

alias A="ls -A"
#echo "A	(la -A)	#List almost all" > ./list-allAlias.txt

alias c='clear'

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

sh ()
{
	echo "#!"${which bash} >> New.sh
	chmod -v +x ./New.sh
}

# ============== The following is a changed copy of Fedora .bashrc

alias juicy="cd ~/home.home/GitHub/juicyDRYgeek-repo && echo '--> juicyDRYgeek-repo' && ls -A"
alias juicy0="cd ~/home.home/GitHub/juicyDRYgeek-repo/all && echo '--> juicyDRYgeek-repo' && ls -A"
alias juicy1="cd ~/home.home/GitHub/juicyDRYgeek-repo/all/About && echo '--> juicyDRYgeek-repo' && ls -A"
alias juicy2="cd ~/home.home/GitHub/juicyDRYgeek-repo/all/apps && echo '--> juicyDRYgeek-repo' && ls -A"
alias gh="cd ~/home.home/GitHub && ls"

alias ls="ls --color"
alias ll="ls -l"
alias A="ls -A"
alias h="cd ~ && ls"
alias op="xdg-open"
alias ct="cat"
alias bs="bash"
alias cl="clear"
alias new="echo '#!/bin/bash' >> New.sh && chmod -v +x New.sh"

#Instead of an alias for ppwd, I decided to assign a variable.
#So, this variable "ppwd" has a certain script inside the curly brakets {}
#First it saves the command pwd "$(pwd)" and stores in some random name given by me called ppwd: "ppwd=$(pwd)"
#then it simply echos what is happening
#if you run echo with the flag -e
#it will the able to read escape codes like \n to enter a new line, and colors: \e[1,36 (blue) ; \e[0m (no color)
ppwd () {
	ppwd=$(pwd)
	echo -e '\e[1;36m print previous workind directory (ppwd) is now set to: \e[0m'
	echo $ppwd
}

#alias cdl=' cd (to argument 1) && ls'      

alias ..="cd .."
alias .="ls"
alias .,="ls -AF"

function 0 () {
	cd ~/../h.h/lsblk/sda19 && ls;
	sudo mount /dev/sda19 ~/../h.h/lsblk/sda19/RP 2>/dev/null
}

#alias cd="pwd >> ~/../usr/tmp/jarve/.history && cd"
alias ,="cd -"
alias ,,='tail -n 2 ~/../tmp/jarve/.history > ~/../tmp/jarve/.history.var && back="$(head -n 1 ~/../tmp/jarve/.history.var)" && cd $back' 
alias ,,,='tail -n 3 /tmp/jarve/.history > /tmp/jarve/.history.var && back="$(head -n 1 /tmp/jarve/.history.var)" && cd $back' 
alias ,,,,='tail -n 4 /tmp/jarve/.history > /tmp/jarve/.history.var && back="$(head -n 1 /tmp/jarve/.history.var)" && cd $back' 
alias ,,,,,='tail -n 5 /tmp/jarve/.history > /tmp/jarve/.history.var && back="$(head -n 1 /tmp/jarve/.history.var)" && cd $back' 
alias ,,,,,,='tail -n 6 /tmp/jarve/.history > /tmp/jarve/.history.var && back="$(head -n 1 /tmp/jarve/.history.var)" && cd $back' 
alias ,,,,,,,='tail -n 7 /tmp/jarve/.history > /tmp/jarve/.history.var && back="$(head -n 1 /tmp/jarve/.history.var)" && cd $back' 
alias ,,,,,,,,='tail -n 8 /tmp/jarve/.history > /tmp/jarve/.history.var && back="$(head -n 1 /tmp/jarve/.history.var)" && cd $back' 
alias ,,,,,,,,,='tail -n 9 /tmp/jarve/.history > /tmp/jarve/.history.var && back="$(head -n 1 /tmp/jarve/.history.var)" && cd $back' 
alias ,,,,,,,,,,='tail -n 10 /tmp/jarve/.history > /tmp/jarve/.history.var && back="$(head -n 1 /tmp/jarve/.history.var)" && cd $back' 

alias +,="echo '--> pwd --> Last 10 places' && tail /tmp/jarve/.history"
alias +h="echo '--> History --> Last 10 commands' && history | tail"

alias 24685="shutdown now"
alias 246854="shutdown -r now"

#This alias is meant to touch an ampty file, just in order for the folder to appear 'www' at git
alias keep="touch .gitkeep && rm keep-empty 2>/dev/null && rm empty 2>/dev/null"

# As to be changed: These 2 alias MUST change home.home/juicyDRYgeek directly and activate aliasManager.jr.sh to correct everything
alias bashrc="vim ~/.bashrc"
alias source="source ~/.bashrc"

alias percentage="upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep percentage"
alias bt-all='upower -i /org/freedesktop/UPower/devices/battery_BAT0'
alias bt="upower -i /org/freedesktop/UPower/devices/battery_BAT0 | grep percentage"


#if [ -f ~/.fzf.bash ]  source ~/.fzf.bash

#LS_COLORS='rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:';
#export LS_COLORS


# LS_COLORS='di=34:ln=35:so=32:pi=33:ex=1;31:bd=34;46:cd=34;43:su=31;47:sg=30;46:tw=30;42:ow=30;43';
# export LS_COLORS
