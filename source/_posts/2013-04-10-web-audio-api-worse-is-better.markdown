---
layout: post
title: "Web Audio API: worse is better"
date: 2013-04-10 13:40
comments: true
categories: 
---

<blockquote>TL;DR Soon we have great desktop and mobile browsers that can run a drum machine implemented in web standards! I'm really happy to see that recent spec changes for Web Audio have ensured that the most commonly-implemented version of the spec will work across most browsers. </blockquote>

I am both a web nerd *and* an electronic music nerd, so I got really excited when I saw that the Firefox team had committed to implementing the Web Audio API. I don't work on anything related to media or standards at Mozilla though, so please if you're reading this just take it as my personal opinion, my little riff on recent events.

When I took a look at Mozilla's [in-progress implementation](https://bugzilla.mozilla.org/showdependencytree.cgi?id=779297&hide_resolved=1) of the Web Audio API, I immediately ran into a key issue:
* we'd implemented the current spec, unprefixed, without any deprecated methods
* most of the example code and libraries out on the web used an outdated version of the spec, mainly because this code *just worked* in Safari and Chrome

This was looking like a clear-cut case of what I think of as *standards sheer*, where initial implementations of a cool new technology become very popular and then need to get re-worked a few times until the w3c standard gets fully baked. When I was following the standards process for Websockets in 2011 as a client implementor I ran into this issue - many client and server libraries were initially written against and early spec version and then there was a huge amount of effort later modernizing these implementations ( or abandoning them! ) as the spec settled.

When Gerv reminded us that Google's 'Summer of Code' program was coming up for 2013, I had for a project where a student would identify and patch as much code as possible in the wild that used deprecated Web Audio API methods. I thought this would be a fun project for a few reasons:
* the student would get experience interacting with a bunch of different projects.
* part of the project would involve blog post on progress and analysis of how standards were being implemented, and what progress could be made just through outreach and patches.

I'm happy ( and perhaps a little disappointed for personal reasons ) to report that this project has been canceled, because it is no longer necessary! In a move that is perhaps the best possible outcome for the Web Audio API, the Web Audio group at the w3c has decided to support the [formerly deprecated API method names](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#AlternateNames). This means two things:
* Firefox will ship with a completely compatible ( but un-prefixed ) implementation of the standard
* once this happens, any existing Web Audio API code will *just work* on Firefox without the kind of patching and outreach I had envisioned as being necessary.

This is a pragmatic approach to the standard that accepts reality. The standard is slightly worse for it in that it is messier, but the web is better for it as soon we'll have millions of web users able to run drum machines in a web page using Firefox. And that's the goal, at least for me.


