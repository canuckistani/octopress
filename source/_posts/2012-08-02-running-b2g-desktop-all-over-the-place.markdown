---
layout: post
title: "Running B2G Desktop all over the place"
date: 2012-08-02 11:45
comments: true
categories: fisl13,b2g,gaia
---

Last Thursday we staged a hugely successful Apps Hack Day in the Mozilla room at [FISL 13](http://softwarelivre.org/fisl13). Was it well attended? We had a massive line-up at 10AM and had to expand to an extra room! Was it well-recieved? Definitely, yes. FISL attracts FOSS enthusiasts from all over Brazil ( and especially students ) and the interest in Mozilla in general and Firefox OS in particular is very, *very* high.

As usual, we started out with a few quick talks to get people up to speed, and then spent the rest of the day helping out and answering questions. My Portuguese is *non-existent*, so I was very happy that we had Mozillians Fabio Magnoni ( from the Brazilian community ) and Artur Adib ( labs engineer ) to give talks in Portuguese. I gave a quick lightning talk in English on how to run B2G desktop to test html5 apps in Firefox OS' environment.

Here's the video:

<iframe width="420" height="315" src="http://www.youtube.com/embed/E1jpt0XZUVk" frameborder="0" allowfullscreen></iframe>

Here are the notes from my lightning talk:

	# Testing HTML5 Apps on B2G Desktop
	    -> Jeff Griffiths, Mozilla

	Online: https://etherpad.mozilla.org/jeffg-gaia-desktop-hacking
		1. get desktop build
		    -> http://ftp.mozilla.org/pub/mozilla.org/b2g/nightly/latest-mozilla-central/
		2. get gaia
		    -> https://github.com/mozilla-b2g/gaia **
		    -> make # run make once to trigger the xulrunner download
		    -> git checkout -b working 07edca0 # a working revision of gaia
		3. create local.mk
		    -> add 'GAIA_APP_SRCDIRS?=apps test_apps showcase_apps my_apps'
		4. create 'my_apps' directory
		5. cp -r test_apps/template ./my_apps/
		7. mv my_apps/template my_apps/$some_cool_name
		6. HACK!!
		7. TEST!!

	Resources:

		1. Linux: http://informationisart.com/11/
		2. Windows: https://github.com/sihorton/b2g-desktop-profile-installer/
		3. Mac: https://github.com/canuckistani/gaia-rocking
		4. https://developer.mozilla.org/en/Apps 
		5. twitter: @mozhacks @canuckistani

One thing that has become very apparent to me while working on [gaia-rocking](https://github.com/canuckistani/gaia-rocking), preparing for this talk, and trying to get people going with B2G Desktop during the rest of the day is that the experience can be *very* rough. The B2G and Gaia teams are focused on one thing only right now, and that is shipping basecamp. This means that Gaia changes all the time, and B2G desktop is not yet well-tested.

Through various conversations with Dietrich and other team members though, I expect this to change and I am hopeful that once the hurricane of basecamp passes we'll see all sorts of cool ideas come to fruition, including better use of Firefox's devtools, and easier set-up of Gaia and desktop builds.
