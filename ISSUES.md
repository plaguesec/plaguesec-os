# Known Issues

### For Elantech Touchpad(Touch Pad Issues)
```
edit /etc/default/grub

add this line

GRUB_CMDLINE_LINUX_DEFAULT="quiet splash psmouse.proto=bare"
GRUB_CMDLINE_LINUX="i8042.reset i8042.nomux i8042.nopnp i8042.noloop"
sudo update-grub

Reboot The Machine
```

### KDE (blackscreen with cursor after login)
```
if this occur it means that you need to update kde packages using pkcon update

to the update run

ctrl + alt + f2
then login you credentials after logging in update using

sudo pkcon update
```

