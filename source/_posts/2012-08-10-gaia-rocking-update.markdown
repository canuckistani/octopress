---
layout: post
title: "Gaia Rocking update"
date: 2012-08-10 12:13
comments: true
categories: b2g,fxos,firefoxos,gaia,mozilla
---

My gaia-rocking tool has been an interesting project, but also somewhat frustrating. Gaia is currently undergoing a high rate of change, and until recently QA at Mozilla was not testing the combination of B2G desktop builds ( which are a very recent  thing ) and Gaia.

This culminated in my attempts to get people going with app development using my system to test with at an apps hack day at FISL 13 in Brazil. Not surprisingly, the 3 main challenges I encountered were:

1. the latest revision of Gaia did not work at all with the current desktop build. To fix this I temporarily fixed both versions at a level that ( mostly ) worked.
1. Gaia's github repo is gigantic, and we were on a slow connection.
1. Gaia unfortunately has a dependency on xulrunner and xulrunner-sdk, and the latter is a rather large download that occurs when make is run for the first time.

The last two problems we mostly mitigated through the judicious use of USB keys. We also ran into Linux distro compatibility issues, and I was reminded once again that writing software on OS X and expecting it to 'just work' elsewhere is a fool's errand. I think I need to work more on Windows and/or Linux so I can feel the unique pains of those platforms.

After returning from Brazil, I've participated in a few email threads about an effort to make this all a lot easier to use. There are two distinct use cases:

1. Apps developers should have some easy way of creating an app and then running B2G desktop to test it.

2. The Gaia project itself needs a way to make sure that the latest stuff works with the other latest stuff, without necessarily having to muck about with a phone.

You'd think these two aims would be aligned closely, but I've come to realize that they are not. Apps developers should have a small-as-possible download of B2G and Gaia that 'Just Works&trade;' and includes a simple workflow for testing their own apps. The Gaia team wants the latest of everything, including *ALL THE BROKEN THINGS*.

Today I pushed some updates to Gaia-rocking that fix things for the Gaia team use case. As it happens in the current state it is also not a bad way to create and test apps, but there are no gurantees that this will stay the same. There is now daily smoke tests of gaia with the dekstop app though, so when things break they will be reported and fixed sooner.

As a slight nod to any apps developers using this, I also added support in the Makefile to create your own local.mk that can contain an override for the location of the Gaia source directory. So this alternate directory could be anywhere, and might contain a known-working version or your own development fork. If I were going to go about hacking on an app, here is what I would do:

``` bash Let's get hacking
1. grab my own Gaia directory with a specific revision: 
curl -o gaia.zip https://github.com/mozilla-b2g/gaia/zipball/master 
// ...or whatever revision you want

2. unzip gaia, create a 'my_apps' subdirectory, then copy the template app into the my_apps subdirectory:
unzip gaia.zip && cd mozilla-b2g-gaia-* && mkdir my_apps && cp -r ./test_apps/template ./my_apps/appname

3. create local.mk in the gaia directory so that the Gaia make command includes your apps:
echo 'GAIA_APP_SRCDIRS?=apps test_apps showcase_apps my_apps' > ./local.mk

4. in the gaia-rocking directory, also create a local.mk file that sets the Gaia source directory to wherever you unzipped your Gaia from
echo 'GAIA_SRC=/path/to/new/gaia/directory'
```

This should get you set up to run B2G Desktop with Gaia in a custom directory, and load your new app into the appcache along with the rest of Gaia's apps:

<img src="https://dl.dropbox.com/u/1212936/gaia_custom_app.png">

This is too many steps, I agree. But, once this setup is done, all you need to do is hack one your app and run 'make run' in the gaia-rocking directory to test in the Gaia environment.