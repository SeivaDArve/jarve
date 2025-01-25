#!/usr/bin/bash

#this will download Dropbox 64bit version .rpm package to Fedora at ~/h.h/apps/dropbox
cd ~/../h.h/

#install libnome (dependency)
dnf install libgnome

#download rpm package
sudo dnf install https://www.dropbox.com/download?dl=packages/fedora/nautilus-dropbox-2020.03.04-1.fedora.x86_64.rpm

