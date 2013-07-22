--- 
created: 1316722467
title: HTML5-based slide deck systems
layout: post
---
I've gotten some questions about the slide deck system I have been using lately ( well, mostly from [Myk](http://mykzilla.blogspot.com/) ) so I though I would do a short post on what I have been using and also point out some alternatives.

A while ago I decided to look into pure html slides after seeing some keynotes from [Google:IO](http://youtu.be/WlwY6_W4VG8) where they demo'd HTML5 features *in their slide deck*. I thought this was splendid! It turns out Google's 'HTML5Slides' code is open source and hosted on [Google Code](http://code.google.com/p/html5slides/). I much prefer [github](http://github.com/), so I brushed off my rusty svn -> git skills and forked their code [into Github](https://github.com/canuckistani/html5slides). I've since de-branded it and made a few css tweaks. The code is a bit hacky but has some nice features:

* single file per presentation with simple, semantic markup
* source code highlighting thanks to Google's [prettyprint](http://code.google.com/p/google-code-prettify/) library, of which I am a huge fan.
* decent default styling
* simple navigation and animations, including a build mode for progressive bullet points.
* works great in Chrome or Firefox, including [Firefox on Android](https://market.android.com/details?id=org.mozilla.firefox_beta&hl=en)!
* assuming the wifi works, everyone in the room can follow along on their laptop, phone or tablet.

I'm pretty comfortable with it and especially appreciate the nice clean styling it gives me by default. I did recently come across this great post by Luigi Montanez called '[Web-Based Slide Decks Done Right](http://luigimontanez.com/2011/web-based-slide-decks-done-right/)'. After reading through this post, I did a bunch of grepping to see what other projects were out there:

1. Mozillian Paul Rouget's [dzslides](https://github.com/paulrouget/dzslides). While I think I'm going to stick with HTML5Slides for now, I'm interested in digging into DZSlides and possibly porting my favourite bits from HTML5Slides over.
1. My colleague [Christian Heilmann](http://www.wait-till-i.com/) has created an impressive HTML5-based slide deck system on [his github account](https://github.com/codepo8/opentech). 
1. Mozillian [Atul Varma](www.toolness.com/) has also created slide decks using html5pad [such as this one](http://htmlpad.org/engagement-slides-take-1/).
1. Google's [HTML5 Rocks](http://slides.html5rocks.com/) slides, which I suspect share a common ancestry with html5slides but are perhaps more sophisticated. Very impressive!

If you are giving a talk about Mozilla, try using one ( or more! ) of these technologies out and see if it works for you. If it does, make sure the people in your talk are aware that your presentation was created using open web technologies!
