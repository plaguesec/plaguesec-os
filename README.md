# <img align="left" src="https://raw.githubusercontent.com/PlagueSec/PlagueSecOS/master/pictures/plaguesec.svg"> PlagueSecurity Operating System 

A Customed Operating System for Security Researchers and Penetration Testers. Based on [Kali Linux](https://www.kali.org/)

&nbsp;


### Plague Security Editions
[Plague Security Docker Edition](https://github.com/plaguesec/plaguesec-docker)  
[Plague Security Live Build ISO](https://github.com/plaguesec/plaguesec-os)  
Plague Security Raspberry PI Editon (Soon)  
Plague Security Tablet (Soon)  

&nbsp;

&nbsp;

### Available ISO Variants
- BUGBOUNTY (XFCE)
- Everything (XFCE)
- KDE
- XFCE

### Instruction for building an ISO on a Debian Based System
Update the System
```
$ sudo apt update
```
Download the Required Packages from http.kali.org  
Note: You may need to check that kali-archive-keyring_20YY.X_all.deb & live-build_20YYMMDD_all.deb are the latest files.
```
$ wget https://http.kali.org/pool/main/k/kali-archive-keyring/kali-archive-keyring_2020.2_all.deb
$ wget https://http.kali.org/kali/pool/main/l/live-build/live-build_20210407_all.deb
```
Now we need to install the requirements to build the operating system
```
$ sudo apt install -y git live-build simple-cdd cdebootstrap curl
$ sudo dpkg -i kali-archive-keyring_2020.2_all.deb
$ sudo dpkg -i live-build_20210407_all.deb
```
with the environment all prepared, we need to setup the build-script profile and clone the plaguesec-os repository
```
$ cd /usr/share/debootstrap/scripts/
$ (echo "default_mirror http://http.kali.org/kali"; sed -e "s/debian-archive-keyring.gpg/kali-archive-keyring.gpg/g" sid) > /tmp/kali
$ sudo mv /tmp/kali .
$ sudo ln -s kali kali-rolling

$ cd ~/
$ git clone https://github.com/PlagueSec/plaguesec-os.git
$ cd plaguesec-os/
```
Then now we are going to build the system
```
$ sudo ./build_non_kali.sh --variant (bugbounty, everything, kde, xfce) -v 
```

### Instruction for building an ISO on a Kali System
Update the System
```
$ sudo apt update
```
We need to install requirements to build the operating system and clone the plaguesec-os repository
```
$ sudo apt install -y git live-build cdebootstrap devscripts simple-cdd
$ git clone https://github.com/PlagueSec/plaguesec-os.git
$ cd plaguesec-os/
```
Now let us Build The Operating System
```
$ sudo ./build.sh --variant (bugbounty, everything, kde, xfce) -v
```

### Help Screen
You can see all the available command-line options by doing `--help`:

```
  --distribution <kali-last-snapshot / kali-rolling / kali-dev>
  --proposed-updates
  --arch <amd64 / i386>
  --verbose
  --debug
  --salt
  --installer
  --live
  --variant <xfce / kde / bugbounty / everything>
  --version <2021.3 / 2021.2 / 2021.1>
  --subdir <kali-2021.3>
  --get-image-path
  --no-clean
  --clean
  --help
```


#### References
[Custom ISO](https://www.kali.org/docs/development/live-build-a-custom-kali-iso/)


#### Official Platforms
[Plague Security Official Website](https://plaguesec.com)

[Plague Security Official Facebook](https://www.facebook.com/PlagueSec-104041125002327)

#### Credits
Based Operating System  
[Kali Linux](https://gitlab.com/kalilinux/build-scripts/live-build-config)

Themes  
[Fluent KDE](https://github.com/vinceliuice/Fluent-kde)  
[Yaru Dark](https://github.com/ubuntu/yaru)

Icon Themes  
[Papirus](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme)  
