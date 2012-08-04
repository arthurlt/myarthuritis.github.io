#/bin/sh
echo "-----------------------------------------------------------------"
echo "                                    Random Fun Facts Script (0.2)"
echo "                             Created by Mars11 "http.//mars11.com/
echo "-----------------------------------------------------------------"
echo " How many facts do you want?"
read -p " Input a number: " number
echo " Where do you want the output? (In your home directory.)"
read -p " Input a directory: " directory
read -p " Input a file name: " name
if [ ! -z $directory ]; then
    if [ ! -d ~/$directory ]; then
        mkdir ~/$directory
        cd ~/$directory
    else
        cd ~/$directory
    fi
fi
if [ ! -z $directory ]; then
    directory=/$directory
fi
echo "-----------------------------------------------------------------"
if [ -e /usr/bin/elinks ]; then
    echo " You have ELinks installed, continuing."
else
    echo " You don't have ELinks, asking for sudo permission to install."
    sudo apt-get install elinks
echo "-----------------------------------------------------------------"
fi
echo " This could take a while..."
for i in $(eval echo {1..$number})
do
    elinks -dump randomfunfacts.com | sed -n '/^| /p' | tr -d \| >> $name.txt
    echo "" >> $name.txt
done
user=`whoami`
echo " Done"
echo " Go to /home/$user$directory/$name.txt to see your facts."
echo "-----------------------------------------------------------------"
