---
layout: post
title: "Jetpack Work Week - London 2012"
date: 2012-09-01 09:05
comments: true
categories: mozilla,jetpack
---

<a target="_blank" href="http://www.flickr.com/photos/dtownsend/7902902958/in/photostream/lightbox/"><img src="http://farm9.staticflickr.com/8461/7902902958_e15e8b2518_z.jpg"></a>

This past week the Jetpack team gathered at Mozilla's <a target="_blank" href="http://www-dev.allizom.org/en-US/about/contact#map-europe-london">brilliant new offices</a> on St. Martin's Lane in London for a much needed work week. It's been a great week so far, and we've gotten a lot done in terms of both high-level discussions on the direction of the project as well as actual code.

Why was this week necessary? For starters, the Jetpack team is one of the more distributed teams in Mozilla, with team members spread from California and the west coast of Canada to Hungary. In particular, there is no city or Mozilla office in the world with more than 2 members - we're spread out! If you also take into account that there are just a few hours of the day when the entire team is awake and working, it becomes even more critical that we gather periodically and work together in the same room.

Another reason why we needed to get together and sync up is that the Jetpack project is at an inflection point, as we are currently working on three key goals:

1. The first goal is to finish our work to offer complete support in the SDK for Firefox on Android. While not all SDK apis make sense to support on mobile, it should be possible to create SDK-based mobile add-ons easily, and also create add-ons that target both desktop and mobile. The tracking bug for this work is <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=787718">bug 787718</a>.
1. The second goal is that we are actively working on landing add-ons <a target="_blank" href="http://people.mozilla.com/~shorlander/files/addons-in-toolbar-i01/addons-in-toolbar.html">user experience improvements</a> in Firefox that we think will dramatically improve the ability for add-ons to integrate easily with the Desktop Firefox UI. You can follow this work by subscribing to <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=695913">bug 695913</a>.
1. Finally and perhaps most importantly, we continue to execute on our plan to land the SDK apis in Firefox. If you're interested in tracking this work, the tracking bug is <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=731779">bug 731779</a>. This move will have several positive impacts:
	* developers will no longer have to re-pack add-ons to maintain compatibility with newer Firefox versions.
	* SDK api implementations will only need to target a specific version of Firefox - our work to support multiple Firefox versions currently complicates our code in places.
	* Add-on developers and Firefox developers will be able to use the SDK's apis with confidence, knowing these apis will be stable and included in Firefox itself.

We talked a lot about these three goals during the week and are currently planning how we work with the rest of the Firefox team to achieve them in the right order and with help from key Mozillians so that we have the best chance for success for each goal, one goal at a time.

Another big change is that our current Product Manger David Mason is moving on to greater responsibilities working with the Mozilla platform team. I'm very pleased to have the opportunity to step into this role in his place, but I know I speak for everyone on the team that we will all miss Dave's prescence in the project and that we are all grateful for all of Dave and Myk's hard work building the Jetpack team over the last couple of years.

During the week we also got a lot of code written, tested and reviewed, in fact we closed 16 SDK bugs including 7 P1 bugs. Some specific achievements included:

* thanks to <a target="_blank" href="https://twitter.com/ejpbruel">Eddy</a>, direct proxies are now in Firefox; this new platform capability will make a lot of Jetpack's code simpler and more performant because we currently use content proxies extensively.
* Eddy also gave an excellent talk on Spidermonkey internals and how they work, including performance tips! Everyone thought this was really interesting ( and at times terrifying ).
* <a target="_blank" href="https://twitter.com/TechnoBarje">Alex</a> implemented preference localization, landed some dramatic PageMod improvements, and fixed some leaks in url.js.
* <a target="_blank" href="https://twitter.com/erikvold">Eric</a> completed and has almost landed tabs api support for Firefox on Android.
* <a target="_blank" href="https://twitter.com/gozala">Irakli</a> investigated implementing an asynchronous file access api, a module for registering chrome uris in SDK add-ons, IndexedDB support, and also continued work on restructuring the SDK's modules into the packageless layout we need in order to land in Firefox.
* <a target="_blank" href="https://twitter.com/zer0">Matteo</a> made great progress on implementing changes to Firefox's navigation toolbar to support the navigation capabilities we are working on, and also landed module metadata to indicated module stability access.
* <a target="_blank" href="https://twitter.com/krizsanits">Gabor</a> landed support for expanded principals, and made progress on a new platform method to apply dynamic css changes to docuemnts.
* Irakli, Will &amp; I hashed out an approach to how we deprecate older low-level apis and introduce news ones, including how we indicate in documentation or via a module's behaviour whether it is experimental, supported or deprecated. This is critical as we continue to improve how the SDK is implemented, especially when other developers are using these lower-level modules.
* <a target="_blank" href="https://twitter.com/EnglishMossop/">Dave Townsend</a>, <a target="_blank" href="https://twitter.com/KWierso">Wes</a> & I dug into bug lists and infrastructure issues, working to make sure that we're communicating well with the resources in Mozilla we need to get our work done.
* <a target="_blank" href="https://twitter.com/dcm">Dave Mason</a> helped me lead a brain-storming session with the team in a side-project to come up with dramatically different / advanced add-on concepts. More on that later.
* I'm sure I forgot some stuff!

Stepping back I'm amazed at all the work we've been doing, and particularly excited about the three key goals I mentioned earlier. It is my belief that a year from now we will look back on these goals and see that they were a turning point not just for the Jetpack project, but for the notion of extensibility in Firefox in general. The Jetpack team is the team at Mozilla that works exclusively on Firefox extensibility; as Dave Townsend reminded us this week this means we must always be thinking about how to improve the add-on experience for Firefox users and add-on developers.