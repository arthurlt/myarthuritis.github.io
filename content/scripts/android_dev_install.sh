#/bin/sh
function pause(){
   read -p "$*"
}
bold=`tput bold`
normal=`tput sgr0`
echo "---------------------------------------------------------------"
echo "          Android App Develepment Installation Script (0.1)"
echo "              Created by Mars11 "http.//mars11.com/""
echo "---------------------------------------------------------------"
echo " We need your user password to install Eclipse. Downloading a "
echo " of data, please be patient."
echo "---------------------------------------------------------------"
yes | sudo apt-get install eclipse
wget http://goo.gl/jg3Yx