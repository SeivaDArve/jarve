# #!/bin/bash
# Title: Bash script who deletes temporary files
# Description: Deletes all files and folders from ../tmp/* and adds a file inside it called .gitkeep in order for the folder tmp remain visible at github.com


# Remove all contents of the tmp folder
clear
echo ""
echo "> Removing all files from the tmp folder"
echo ""
echo "List:"
ls -A ../../tmp
echo ""
echo -n "> Hit Enter to continue (Ctrl+C to exit)"
read
echo "> Hit Enter to again..."
read
rm -rf ../../tmp/*

# Add a file to that directory that is necessary for the git command to detect the folder
echo "adding .gitkeep to tmp folder"
touch ../../tmp/.gitkeep

# End of script
echo "Done!"
