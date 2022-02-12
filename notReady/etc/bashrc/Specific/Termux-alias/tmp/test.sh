#!/bin/bash


adicionar ()
{
	echo "Texto de adicionar"
}

remover ()
{
	echo "Texto de remover"
}


echo ""
echo "Test app"
echo "(a)dicionar; (r)emover"
read var

if [ var == "a" ]
then
	adicionar
fi

if [ var = "r" ]
then
	remover
fi
