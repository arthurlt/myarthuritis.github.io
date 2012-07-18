#!/bin/sh
echo "---------------------------------------------------------------"
echo "              Minecraft Black Screen Fix Script (0.2)          "
echo "              Created by Mars11 "http://mars11.com/"           "
echo "---------------------------------------------------------------"
echo "                  Make sure Minecraft is closed.               "
echo "---------------------------------------------------------------"
#We're making a directory for this.
mkdir ~/.minecraft/black_screen_fix
#Now we're moving to that directory.
cd ~/.minecraft/black_screen_fix
#Now we're downloading the files.
wget http://iweb.dl.sourceforge.net/project/java-game-lib/Official%20Releases/LWJGL%202.8.4/lwjgl-2.8.4.zip
#Now we're unziping them.
unzip lwjgl-2.8.4.zip
#Now we're copying the .so files.
yes | cp -r ~/.minecraft/black_screen_fix/lwjgl-2.8.4/native/linux/* ~/.minecraft/bin/natives
#Now we're copying the .jar files.
yes | cp -r ~/.minecraft/black_screen_fix/lwjgl-2.8.4/jar/jinput.jar ~/.minecraft/black_screen_fix/lwjgl-2.8.4/jar/lwjgl.jar ~/.minecraft/black_screen_fix/lwjgl-2.8.4/jar/lwjgl_util.jar ~/.minecraft/bin/
echo "---------------------------------------------------------------"
echo "We should be done now. If you're still having problems contact "
echo "                  me at "arthurlt@gmail.com".                   "
echo "---------------------------------------------------------------"
read -p "Press Enter to continue"

