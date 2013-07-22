--- 
created: 1306190319
title: Raw JSON posts with Jetpack
layout: post
---
I've taken a <a href="http://goo.gl/pBdoY">sudden interest</a> in Mozilla's <a href="https://github.com/mozilla/addon-sdk">Addons sdk</a> ( otherwise known as Jetpack ). I'm a bit of an old hat with Firefox's extension technology from my time at ActiveState; back then it was a bit painful to author and build package Mozilla extensions and we tried to make it a bit easier with Komodo, both for Firefox extensions and Komodo extensions. 

Jetpack is a quantum leap forward in ease of use for building Firefox extensions. I was immediately impressed by the straightforward APIs, extensive docs and great command-line-oriented tooling and debugging. After a few hours of reading the docs, trying out the simple example and <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=658165">fixing a bug ( nitpick, really )</a> in the SDK, I have implemented a highly derivative Url-shortening extension and posted the code on <a href="https://github.com/canuckistani/Goo.gl-Jetpack-extension">github</a>. And it works ( on my box )!

The extension has a very simple workflow:

* Hit Ctrl+Shift+u to create a shortened goo.gl Url for the current page.
* The extension will copy the new url to your clipboard and bring up a notification bubble. 
* if you click on the notification bubble, Firefox will create open a new Tab with the shortened url.

The one implementation detail that took a bit longer was the actual call to the goo.gl url shortening service. I noted that the Google request to create a shortened url requires a raw json post with a content type of application/json. Typically POST requests have a content type of multi-part/form-data with url-encoded key/value pairs, and so without reading the jetpack docs closely I just implemented a <a href="http://goo.gl/XobBw">typical xhr-based solution</a> because I knew I could jam raw JSON content into the request:

<script src="https://gist.github.com/987815.js?file=xhr.js"></script>

Yesterday I went back to see if I could get the request working with Jetpack's APIs, and it turns out the solution was pretty simple:

<script src="https://gist.github.com/987823.js?file=jetpack_json_post.js"></script>

In particular it's really flexible to be able to simply set the content body and content type header directly; given the diverse ways in which different online data providers are implementing their apis it's nice to be able to tie into externals in a simple and flexible way. Jetpack's hjgher-level apis also make it much easier to detect error handling, etc. You can also test asynchronous code like this using Jetpack's test framework:

<script src="https://gist.github.com/987852.js?file=jetpack-async-test.js"></script>

The async features don't feel quite as slick as qunit's implementation to me, but they're easy to understand and implement. My next target is what seems to be the secret sauce in Jetpack: the ability to create HTML user interfaces and wire them into Jetpack code by posting events back and forth between the DOM code and the extension code.
