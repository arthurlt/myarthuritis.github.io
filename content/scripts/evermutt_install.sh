#!/bin/bash
echo "---------------------------------------------------------------"
echo "                Evermutt Installer Script v(0.4)               "
echo "              Created by Mars11 "http://mars11.com/"           "
echo "---------------------------------------------------------------"
echo "It will ask you for your account password that's for installing"
echo "mutt and for providing root access for file transfers and editing files"
echo "---------------------------------------------------------------"
echo "   When installing Mutt say "Ok" and then "Internet Site"      "
echo "---------------------------------------------------------------"
#Installing Mutt
yes | sudo apt-get install mutt
#Installing Evermutt
cd ~/Downloads
wget http://dl.dropbox.com/u/3237850/Evermutt.tar.gz
tar -xvf Evermutt.tar.gz
sudo mv Evermutt/evernote.desktop /usr/share/applications
sudo mv Evermutt/evernote.png /usr/share/pixmaps
sudo mv Evermutt/evermutt.sh /usr/bin
sudo mv Evermutt/evermutttext.sh /usr/bin
chmod +x /usr/bin/evermutt.sh
chmod +x /usr/bin/evermutttext.sh
echo "---------------------------------------------------------------"
echo "   Now this requires you to enter your unique Evernote email   "
echo "            To retrieve your unique email go to                "
echo "         "https://www.evernote.com/Settings.action"            "
echo "           Just replace "Evernote Email" with yours            "
echo "---------------------------------------------------------------"
gksudo gedit /usr/bin/evermutt.sh
gksudo gedit /usr/bin/evermutttext.sh
echo "---------------------------------------------------------------"
echo " Done! Now just search for "Evernote" in your Dash and drag it "
echo "                       to the launcher.                        "
echo "---------------------------------------------------------------"
echo "If things still aren't working contact me @ "arthurlt@gmail.com""
echo "---------------------------------------------------------------"
read -p "Press enter to continue"






