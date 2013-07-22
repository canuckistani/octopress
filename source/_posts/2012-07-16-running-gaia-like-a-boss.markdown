---
layout: post
title: "Running Gaia like a BOSS ( Pull requests welcome! )"
date: 2012-07-16 22:13
comments: true
categories: 
---

<img src="https://dl.dropbox.com/u/1212936/gaia-desktop.png"/>

<p style="font-size: 110%; color: red;">[[UPDATE: if you have trouble running Gaia with this tool ( or, at all ), you may need to run using 'sudo'.]]</p>

A week or so ago [Hernan Colmeiro](https://github.com/peregrinogris) blogged about using [B2G Desktop](http://ftp.mozilla.org/pub/mozilla.org/b2g/nightly/latest-mozilla-central/) to [run Gaia on a desktop computer](http://www.peregrinogris.com.ar/4-Shedding-some-light-on-Firefox-OS), amongst other things. Running Gaia in this way is compelling as a way to test & preview apps in the Gaia environment: you get the correct display size as well as the correct app launch & dismissal behaviour.

But... it is a little awkward to get going. instructions for manually setting this up are of course [on the wiki](https://wiki.mozilla.org/Gaia/Hacking#Running_B2G), but there is still a lot of setup and implied foreknowledge about terminals, etc. I created the [gaia-rocking repo](https://github.com/canuckistani/gaia-rocking) to help this ( and Hernan kindly linked to it! ) but gaia-rocking doesn't quite rock, and currently it doesn't rock at all on Linux or Windows. It needs help!

A short list of things I need to do this week:

* Windows and Linux support. Just running on Macs is clearly not good enough.
* some way of easily pushing a single app into Gaia for testing
* maybe an embedded web server that serves up apps the right way? Sort of Marketplace-lite.
* [Mortar](https://github.com/mozilla/mortar) integration ( unsure completely what that means... )
* I'm thinking of porting the Makefile to coffeescript, just for fun.

[Pull requests welcome](https://github.com/canuckistani/gaia-rocking/pulls)!
