--- 
created: 1324796567
title: Launching multiple Firefox profiles on OS X using applescript
layout: post
---
<a href="http://blog.ascher.ca/" target="_blank">David</a> asked me the other day to blog about my applescript hack for launching different Firefox profiles in separate processes. I consider this to be, at best, a hack, but it's a pretty productive hack, so here we go!

Step 1: create a new profile:

<pre>/Applications/Aurora.app/Contents/MacOS/firefox -ProfileManager</pre>

Just click on 'Create Profile', name the profile ( say, Firebug, for no particular reason ), and click ok. Make sure when you get back to the ProfileManager you select 'default' again: 

<img src="http://dl.dropbox.com/u/1212936/ff_profiles/profilemanager.png">

Firefox will instead select the *new* profile, which is not what we want.

Step 2: create the applescript

Open the applescript editor and paste in this code:

( **Update** : Peter Cramer was nice enough to send me a patch for this script that solves the focus problem. )

<pre>
do shell script "/Applications/FirefoxNightly.app/Contents/MacOS/firefox -jsconsole -P Nightly &> /dev/null &"

delay 2

tell application "System Events" to keystroke tab using {command down, shift down}
</pre>

You'll note, this isn't *really* much applescript, what we're really doing is just shelling out to fire up Aurora.app and supply the correct argument for -P. 

Step 3: create the .app bundle

In the applescript editor, select Edit / Save As and select 'Application' under the 'File format' drop list. This will create a .app bundle that acts just like any other OS X application. In particular, the name you gave it is nicely indexed by Spotlight, so you can launch it by triggering Spotlight ( or butler, or Quicksilver? ) and typing some fragment of the filename:

<img src="http://dl.dropbox.com/u/1212936/ff_profiles/save_as_app.png">

You should now be able to launch Aurora ( or whichever channel you pref ) running a specific profile by double-clicking on this .app. This isn't how I use it though, instead I tend to launch the .app via Spotlight:

<img src="http://dl.dropbox.com/u/1212936/ff_profiles/spotlight.png">

<del>_Caveat_: the one problem with this technique is that Firefox is launched dead-last in the applications list, so you will need to manually switch to it. It's slightly annoying, but I theorize that it is no less annoying than having to learn enough Applescript to work around it. I *did* look into this for a bit the other night with no luck. Patches / suggestions welcome!</del> ( See note above regarding a workaround for the focus issue. )
