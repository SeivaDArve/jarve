#!/bin/bash
#
#Description:
#After searching the internet and trying it on my laptop, here is a bash script to calculate the time difference where we have to change the start time and end time in the script in lines 3 and 4 manually:
#

time_start=05-31-2021@:04:27:25
time_finish=05-31-2021@:04:27:24
date2sec() { date -d "$(sed 's|-|/|g; s|@| |; s|:| |' <<<"$*")" +%s; }
second=`echo $(( $(date2sec "$time_finish") - $(date2sec "$time_start") ))`
echo "The time difference between the two times above is $second second"
