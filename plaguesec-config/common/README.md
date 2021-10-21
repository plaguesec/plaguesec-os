```
├── bootloaders
│   └── grub-pc <Grub Boot Loader>
│       ├── config.cfg
│       ├── dejavu-bold-14.pf2
│       ├── dejavu-bold-16.pf2
│       ├── grub.cfg
│       ├── live-theme
│       │   └── theme.txt
│       ├── splash.png
│       └── theme.cfg
├── hooks
│   └── live
│       ├── forensic-menu.binary
│       ├── kali-hacks.chroot
│       └── persistence-menu.binary
├── includes.binary
│   └── isolinux <Splash Install>
│       ├── install.cfg
│       ├── splash.png
│       └── stdmenu.cfg
├── includes.chroot
│   ├── bin
│   ├── boot <Boot Theme>
│   │   └── grub
│   │       └── themes
│   │           └── kali
│   │               ├── background.png
│   │               ├── grub-16x9.png
│   │               ├── grub-4x3.png
│   │               ├── grub_background.sh
│   │               ├── select_c.png
│   │               ├── select_e.png
│   │               ├── select_w.png
│   │               ├── theme.txt
│   │               └── unifont-regular-16.pf2
│   ├── etc
│   |   ├── firefox-esr <Firefox Pimp>
│   │   ├── gtk-2.0
│   │   │   └── gtkrc
│   │   ├── lightdm
│   │   │   └── lightdm-gtk-greeter.conf <XFCE Greeter>
│   │   ├── live
│   │   │   └── config.conf.d <Setup Live User Name and Hostname>
│   │   │       └── kali.conf
│   │   ├── network
│   │   ├── plymouth
│   │   │   └── plymouthd.conf <Plymouth Configuration>
│   │   ├── sddm.conf.d
│   │   │   └── kde_settings.conf <SDDM Theme Configurations>
│   │   ├── skel
│   │   │   └── Enumerators
│   │   │       ├── exploit-suggester
│   │   │       ├── LinEnum.sh
│   │   │       ├── lse.sh
│   │   │       ├── peass
│   │   │       ├── priv-check
│   │   │       ├── pspy
│   │   │       └── unix-privesc-check
│   │   └── xdg <Transfered to .Skel>
│   │       ├── autostart <Auto Start>
│   │       │   └── plank.desktop
│   │       ├── compton.conf
│   │       ├── gtk-3.0
│   │       │   └── settings.ini
│   │       ├── kdeglobals <KDE Set Theme>
│   │       ├── konsolerc <KDE Konsole Theme>
│   │       ├── kscreenlockerrc <KDE Lock Screen Theme set>
│   │       ├── ksplashrc <KDE Splash Screen Set>
│   │       ├── kwinrc <KDE Theme Set>
│   │       ├── plasmarc <KDE Theme Set>
│   │       ├── qt5ct
│   │       │   └── qt5ct.conf
│   │       ├── qterminal.org <Default Theme for Terminal XFCE>
│   │       │   └── qterminal.ini
│   │       ├── Thunar
│   │       │   ├── accels.scm
│   │       │   └── uca.xml
│   │       ├── xfce4
│   │       │   ├── helpers.rc
│   │       │   ├── panel <Panel for XFCE>
│   │       │   │   └── default.xml
│   │       │   ├── terminal <Terminal Profile for XFCE>
│   │       │   │   └── terminalrc
│   │       │   ├── whiskermenu <Whisker Menu for XFCE>
│   │       │   │   └── defaults.rc
│   │       │   └── xfconf <XFCE Configurations>
│   │       │       └── xfce-perchannel-xml
│   │       │           ├── xfce4-desktop.xml
│   │       │           ├── xfce4-keyboard-shortcuts.xml
│   │       │           ├── xfce4-power-manager.xml
│   │       │           ├── xfwm4.xml
│   │       │           └── xsettings.xml
│   │       └── yakuakerc
│   └── usr 
│       ├── lib
│       │   └── live
│       │       └── config <Live User> 
│       │           ├── 0031-kali-user-setup
│       │           └── 1165-fix-openssh-server
│       └── share
│           ├── aurorae <KDE Themes>
│           │   └── themes
│           │       ├── Fluent
│           │       ├── Fluent-dark
│           │       └── Fluent-light
│           ├── backgrounds <XFCE Backgrounds>
│           │   ├── kali
│           │   │   ├── v1.png
│           │   │   ├── v2.png
│           │   │   ├── v3.png
│           │   │   ├── v4.png
│           │   │   └── v5.png
│           │   └── kali-16x9
│           ├── color-schemes <Color Schemes for KDE>
│           │   ├── FluentDark.colors
│           │   └── FluentLight.colors
│           ├── firefox-esr <Firefox Pimp>
│           ├── grub <Grub Theme>
│           │   ├── ascii.h
│           │   ├── ascii.pf2
│           │   ├── default
│           │   │   ├── grub
│           │   │   └── grub.md5sum
│           │   ├── euro.pf2
│           │   ├── grub-mkconfig_lib
│           │   ├── themes
│           │   │   └── kali
│           │   │       ├── background.png
│           │   │       ├── grub-16x9.png
│           │   │       ├── grub-4x3.png
│           │   │       ├── grub_background.sh
│           │   │       ├── select_c.png
│           │   │       ├── select_e.png
│           │   │       ├── select_w.png
│           │   │       ├── theme.txt
│           │   │       └── unifont-regular-16.pf2
│           │   ├── unicode.pf2
│           │   └── widthspec.h
│           ├── icons <Icon Theme for XFCE and KDE>
│           │   └── Papirus-Yaru-Dark 
│           ├── kali-defaults <Webpage for Firefox>
│           │   └── web
│           │       └── homepage.html
│           ├── konsole <Kde terminal Theme>
│           │   └── PlagueSec.profile
│           ├── Kvantum <KDE STUFFS>
│           │   ├── Fluent
│           │   └── Fluent-round
│           ├── PlagueSec-Dock-theme <Plank Themes>
│           │   ├── dock.theme
│           │   └── Dock_themes
│           │       ├── mcOS_Mojave_Black
│           │       │   └── dock.theme
│           │       ├── mcOS_Mojave_Day
│           │       │   └── dock.theme
│           │       ├── mcOS_Mojave_Day_Dark
│           │       │   └── dock.theme
│           │       ├── mcOS_Mojave_Night
│           │       │   └── dock.theme
│           │       ├── mcOS_Mojave_Night_Line
│           │       │   └── dock.theme
│           │       └── mcOS_Mojave_White
│           │           └── dock.theme
│           ├── plaguesec-files <Files>
│           │   ├── icon_logo.png
│           │   └── login-emblem.png
│           ├── plasma <KDE Themes>
│           │   ├── desktoptheme <KDE Desktop Theme>
│           │   │   ├── Fluent
│           │   │   ├── Fluent-dark
│           │   │   └── Fluent-light
│           │   ├── layout-templates <KDE Layout>
│           │   │   └── org.github.desktop.FluentPanel
│           │   └── look-and-feel <KDE Looks and Feel>
│           │       ├── com.github.vinceliuice.Fluent
│           │       ├── com.github.vinceliuice.Fluent-dark
│           │       └── com.github.vinceliuice.Fluent-light
│           ├── plymouth <Plymouth Theme>
│           │   └── themes
│           │       └── plaguesec
│           │           ├── outline.png
│           │           ├── password-dot.png
│           │           ├── password-field.png
│           │           ├── plague-logo-container.png
│           │           ├── plague-logo-fade.png
│           │           ├── plague-logo.png
│           │           ├── plaguesec.plymouth
│           │           └── plaguesec.script
│           ├── sddm <KDE LockScreen Theme>
│           │   └── themes
│           │       └── Fluent
│           │           ├── assets
│           │           ├── background.png
│           │           ├── Background.qml
│           │           ├── BreezeMenuStyle.qml
│           │           ├── components
│           │           ├── faces
│           │           ├── KeyboardButton.qml
│           │           ├── Login.qml
│           │           ├── Main.qml
│           │           ├── metadata.desktop
│           │           ├── preview.png
│           │           ├── SessionButton.qml
│           │           ├── theme.conf
│           │           └── theme.conf.user
│           ├── themes <Theme of XFCE>
│           │   └── Yaru-dark
│           │       ├── gnome-shell
│           │       ├── gtk-2.0
│           │       │   ├── apps.rc
│           │       │   ├── assets
│           │       │   ├── gtkrc
│           │       │   ├── hacks.rc
│           │       │   └── main.rc
│           │       ├── gtk-3.0
│           │       │   ├── assets
│           │       └── index.theme
│           └── wallpapers  <Wallpapers for KDE>
│               ├── PlagueSecurity
│               │   ├── contents
│               │   │   └── images
│               │   │       ├── 1600x1200.png
│               │   │       ├── 2560x1600.png
│               │   │       └── 3840x2160.png
│               │   └── metadata.desktop
│               ├── v1.png
│               ├── v2.png
│               ├── v3.png
│               ├── v4.png
│               └── v5.png
├── includes.installer
│   ├── finish-install <Finish Install>
│   ├── preseed.cfg
│   └── usr
│       ├── lib
│       │   ├── finish-install.d
│       │   │   └── 14finish-install
│       │   └── live-installer.d
│       │       └── unhold
│       └── share
│           └── graphics
│               ├── logo_debian_dark.png
│               ├── logo_debian.png
│               ├── logo_installer_dark.png
│               └── logo_installer.png
├── package-lists
│   ├── hardware-support.list.chroot
│   ├── kali.list.binary
│   ├── linux-headers.list.chroot
│   ├── standard.list.chroot
│   └── virtualization.list.chroot
├── preseed
│   └── kali.cfg.chroot
└── README.md
```
