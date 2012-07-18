#!/bin/bash
echo "---------------------------------------------------------------"
echo "              libdvdcss (DVD) Installer Script (0.3)           "
echo "              Created by Mars11 "http://mars11.com/"           "
echo "---------------------------------------------------------------"
echo "User password is required so we can use root (admin) privileges"
echo "             to install and run programs and scripts.          "
echo "---------------------------------------------------------------"
yes | sudo apt-get install libdvdread4
sudo /usr/share/doc/libdvdread4/install-css.sh
echo "---------------------------------------------------------------"
echo "       Done! DVD's should work now, if it doesn't reboot.      "
echo "---------------------------------------------------------------"
echo "If things still aren't working contact me @ "arthurlt@gmail.com""
echo "---------------------------------------------------------------"
read -p "Press enter to continue"
