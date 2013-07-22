--- 
created: 1267390570
title: Ubuntu Xbmc install notes
layout: post
---
<p>Synopsis: OS X is awesome for what you can do out of the box, but getting beyond that can be excruciatingly painful. Linux is also awesome and you can do in many ways even more amazing things with it, but figuring it all out can take time and patience ( and teach you things ). I recently re-built the computer</p>
<p><b><i>Hardware</i></b></p>
<ul>
  <li>Gigabyte GA-E31M-S2</li>

  <li>Intel E5200</li>

  <li>XFX Geforce 8500GT</li>
</ul>
<p><i><b>Install</b></i></p>
<p>I installed Ubuntu Karmic Koala 9.10 x86_64 from CD. I used a few tricks to get this working in a headless way from my laptop:</p>
<ul>
  <li>apt-get install openssh-server</li>

  <li>su - and change the root password, then logged in as root from my MacBook</li>

  <li>un-commented the universe repos in /etc/apt/sources.list</li>

  <li>installed tightvncserver</li>

  <li>patched ~/.vnc/xstartup to work around <a href="http://ubuntuforums.org/showthread.php?p=7161767#post7161767">this bug</a>:<br />
    <pre>
#!/bin/sh

xrdb $HOME/.Xresources
xsetroot -solid grey
export XKL_XMODMAP_DISABLE=1
#x-terminal-emulator -geometry 80x24+10+10 -ls -title "$VNCDESKTOP Desktop" &amp;
#x-window-manager &amp;
/etc/X11/Xsession
</pre>
  </li>

  <li>started tightvncserver and logged in</li>

  <li>started the graphical installation</li>
</ul>
<p><b><i>Post-install setup and software</i></b></p>
<p>After re-booting, I open gnome terminal and install openssh-server again, then switch back to the laptop. I remove the line added to my laptop's known_hosts file for the livecd's install of openssh-server, then log into the fresh Ubuntu install. First stop, su - to root, run aptitude and install any security updates. Next I repeat the above process for installing tightvncserver.</p>
<p>The first step is to activate the Nvidia drivers, basically you just need to pick the recommended one. Reboot, then go to the Gnome appearance settings and turn *off* desktop effects, enabling Compiz will cause video tearing artifacts in Xbmc. Make sure you have the latest drivers, I ended up installing them using <a href="http://is.gd/9qo2B">this guide</a>.</p>
<p>The software configuration consists of a few groups of packages:</p>
<ul>
  <li>xmbc, via their handy <a href="https://launchpad.net/~team-xbmc/+archive/ppa">ppa</a></li>

  <li>lirc, for IR support of my M$ Media Centre remote. Lirc will prompt you to configure which device you have on install; mine is supported as a generic 'Media Center Remote' but there are a large number of remotes supported.</li>

  <li>torrentflux, for downloading, er, perfectly legal stuff from legal sites</li>
</ul>
<p>The really nice thing about this setup is t hat the VDPAU support for hardware decoding in the Linux Nvidia drivers takes an enormous load off of the CPU when playing HD files.</p>
<p>Once XBMC and lirc are installed, the final steps were simple:</p>
<ul>
  <li>make sure the system logs my user in on boot</li>

  <li>set XBMC to start on boot</li>

  <li>using the Microsoft remote, zip through the menus in XBMC and configure things to my liking</li>
</ul>
<p>I can only assume that hundreds of hours of work have been done by the XBMC team to get things to the currents state; it's a really slick system once you have it running and the Linux-only VDPAU features offer amazing performance.</p>
