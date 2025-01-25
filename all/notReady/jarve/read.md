What happens behing the scenes:

1- You clone the repo
2- You open the folder "juicyDRYgeek-repo" and see jarve.bat + jarve.sh
	2.1 - These are service starters, They only run once, all other times they redirect
3- jarve.bat and jarve.sh establish the h.h folder and send to this directory ($ cd .)
4- Here ($ cd .) you can see jarve-gitbash and jarve-linux (they have no extension. No doubt they are .sh)
5- Why? Where is the need of jarve.bat? - windows does not run bash unless you install Git Bash. 
6- the alias to pop up the jarve menu (with $ jarve) will change from juicyDRYgeel-repo/jarve.sh to juicyDRYgeek-repo/all/jarve/jarve-linux
