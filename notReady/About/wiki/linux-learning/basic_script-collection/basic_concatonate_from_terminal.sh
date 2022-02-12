#!/data/data/com.termux/files/usr/bin/bash

echo
echo "add some text to ./TextoExemplo.tmp"

#Ask directly to terminal to insert text into some file instead of asking vim or nano
cat > TextoExemplo.tmp

#When your text is ready, close it with Ctrl-D
