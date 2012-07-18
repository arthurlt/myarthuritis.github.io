#/bin/sh
function pause(){
   read -p "$*"
}
bold=`tput bold`
normal=`tput sgr0`
echo "---------------------------------------------------------------"
echo "                Java Installation Script (0.2)"
echo "              Created by Mars11 "http.//mars11.com/""
echo "---------------------------------------------------------------"
if [ -d ~/.java ]; then
    echo "     .java directory found. Have you already run this?"
    echo "---------------------------------------------------------------"
else
    mkdir ~/.java/
fi
if [ `getconf LONG_BIT` = "32" ]; then
    echo "  Opening web browser, download the Linux X86 .tar.gz file."
    bit=32
else
    echo "  Opening web browser, download the Linux X64 .tar.gz file."
    bit=64
fi
echo "---------------------------------------------------------------"
pause 'Press [Enter] key to continue...'
xdg-open http://www.oracle.com/technetwork/java/javase/downloads/jre7-downloads-1637588.html
sleep 5
pause 'Press [Enter] key once you have downloaded...'
if [ $bit = 32 ]; then
    mv ~/Downloads/j??-7u?-linux-i586.tar.gz ~/.java/
    cd ~/.java/
    tar -xvf j??-7u?-linux-i586.tar.gz
else
    mv ~/Downloads/j??-7u?-linux-x64.tar.gz ~/.java/
    cd ~/.java/
    tar -xvf j??-7u?-linux-x64.tar.gz
fi
cd ~/.java/
echo "---------------------------------------------------------------"
echo " Asking for user password to move java files to /usr/lib/jvm."
echo "---------------------------------------------------------------"
if [ ! -d /usr/lib/jvm/ ]; then
    sudo mkdir /usr/lib/jvm
fi
sudo mv ./j??1.7.?_?? /usr/lib/jvm/java1.7
sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/java1.7/bin/java" 1
sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jvm/java1.7/bin/javac" 1
sudo update-alternatives --install "/usr/bin/javaws" "javaws" "/usr/lib/jvm/java1.7/bin/javaws" 1
echo "---------------------------------------------------------------"
echo "You will something similar to this, choose one like the one in bold"
echo "---------------------------------------------------------------"
echo "There are 3 choices for the alternative java (providing /usr/bin/java)."
echo ""
echo "Selection Path Priority Status"
echo "————————————————————"
echo "* 0 /usr/lib/jvm/java-6-openjdk/jre/bin/java 1061 auto mode"
echo "1 /usr/lib/jvm/java-6-openjdk/jre/bin/java 1061 manual mode"
echo "2 /usr/lib/jvm/java-6-sun/jre/bin/java 63 manual mode"
echo "${bold}3 /usr/lib/jvm/java1.7/jre/bin/java 3 manual mode"
echo "${normal}"
echo "Press enter to keep the current choice[*], or type selection number: 3"
echo "update-alternatives: using /usr/lib/jvm/jdk1.7.0/jre/bin/java to provide /usr/bin/java (java) in manual mode."
echo "---------------------------------------------------------------"
sudo update-alternatives --config java
echo "---------------------------------------------------------------"
echo "You will something similar to this, choose one like the one in bold"
echo "---------------------------------------------------------------"
echo "There are 3 choices for the alternative javac (providing /usr/bin/javac)."
echo ""
echo "Selection Path Priority Status"
echo "————————————————————"
echo "* 0 /usr/lib/jvm/java-6-openjdk/jre/bin/javac 1061 auto mode"
echo "1 /usr/lib/jvm/java-6-openjdk/jre/bin/javac 1061 manual mode"
echo "2 /usr/lib/jvm/java-6-sun/jre/bin/javac 63 manual mode"
echo "${bold}3 /usr/lib/jvm/java1.7/jre/bin/javac 3 manual mode"
echo "${normal}"
echo "Press enter to keep the current choice[*], or type selection number: 3"
echo "update-alternatives: using /usr/lib/jvm/jdk1.7.0/jre/bin/javac to provide /usr/bin/javac (javac) in manual mode."
echo "---------------------------------------------------------------"
sudo update-alternatives --config javac
echo "---------------------------------------------------------------"
echo "You will something similar to this, choose one like the one in bold"
echo "---------------------------------------------------------------"
echo "There are 3 choices for the alternative javaw (providing /usr/bin/javaw)."
echo ""
echo "Selection Path Priority Status"
echo "————————————————————"
echo "* 0 /usr/lib/jvm/java-6-openjdk/jre/bin/javaws 1061 auto mode"
echo "1 /usr/lib/jvm/java-6-openjdk/jre/bin/javaws 1061 manual mode"
echo "2 /usr/lib/jvm/java-6-sun/jre/bin/javaws 63 manual mode"
echo "${bold}3 /usr/lib/jvm/java1.7/jre/bin/javaws 3 manual mode"
echo "${normal}"
echo "Press enter to keep the current choice[*], or type selection number: 3"
echo "update-alternatives: using /usr/lib/jvm/jdk1.7.0/jre/bin/javaws to provide /usr/bin/javaws (javaws) in manual mode."
echo "---------------------------------------------------------------"
sudo update-alternatives --config javaws
if [ ! -d ~/.mozilla/plugins/ ]; then
    mkdir ~/.mozilla
    mkdir ~/.mozilla/plugins
fi
if [ $bit = 32 ]; then
    ln -s /usr/lib/jvm/java1.7/jre/lib/i386/libnpjp2.so ~/.mozilla/plugins/
else
    ln -s /usr/lib/jvm/java1.7/jre/lib/amd64/libnpjp2.so ~/.mozilla/plugins/
fi
echo "---------------------------------------------------------------"
echo "Java is now installed, if you had any problems send me an email"
echo "at "arthurlt@gmail.com" with Java Install Script as the subject"
echo "                   with any errors in the body."
echo "---------------------------------------------------------------"
pause 'Press [Enter] key to continue...'