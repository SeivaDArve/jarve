#!/data/data/com.termux/files/usr/bin/bash

echo "Insert a number"
read number

if [ $number -eq 9 ]
then
	echo "condition is true"

elif (( $number > 9 ))
then
	echo " ondition is also true"
else
	echo "condition is false"
fi


# Equal to
# -eq
# =

# Not equal to
# -ne
# !=

# Greater than
# -gt
# to use the ">" simbol to say "greater than", then you must replace [ X -gt Y ] for (( X > Y )). 
# example:
#$ if (( $number > 10 ))

# Less than
# -lt

# 'And' written in many ways
# if [ $number >= X ] && [ X = Y ]
# if [[ $number >= X &&  X = Y ]]
# if [ $number >= X -a  X = Y ]

# 'Or' written in many ways
# if [ $number >= X ] || [ X = Y ]
# if [[ $number >= X || X = Y ]]
# if [ $number >= X -o  X = Y ]
