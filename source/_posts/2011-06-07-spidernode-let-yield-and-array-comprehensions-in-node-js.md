--- 
created: 1307507259
title: "Spidernode: 'let', 'yield' and array comprehensions in Node.js"
layout: post
---
JavaScript 1.7 / 1.8 have been supported in Firefox for a while now and have some great new language features common to other languages like Python such as generators and list comprehensions. These features have yet to make it into the *other* browser JavaScript implementations so they're mainly used by people writing code directly for Firefox itself, as well as Firefox Addons and Mozilla-based apps like Thunderbird, <a href="http://goo.gl/RyQL">Songbird</a> and <a href="http://goo.gl/vfDc">Komodo</a>.

Last month at JSConf in Portland Brendan Eich ( creator of JavaScript ) <a href="http://goo.gl/Qvn6F">presented a talk</a> on a project Mozilla has hatched called <a href="http://goo.gl/Z7bxq">'SpiderNode'</a>,  a 'port of node.js using the SpiderMonkey JS engine instead of V8'.

I wasn't able to attend JSConf, but as I read about Spidernode that day a light-bulb went off in my brain and I made a note to try and get this thing running. Why? Well, technical perversity for a start. Another reason is that it provides a nice server-oriented, command-line JS interpreter complete with some of the advanced language sugar Mozilla has added into Spidermonkey. To whit:
<script src="https://gist.github.com/1013723.js?file=spidernode_comprehensions.js"></script> 
( Example poached shamelessly from <a href="https://developer.mozilla.org/en/New_in_JavaScript_1.7#Array_comprehensions_%28Merge_into_Array_comprehensions%29">MDC</a> )

If you run the above code snippet on standard node.js, you get a synax error:

<pre>
/Users/jeff/code/node/moz-node-hacks/app.js:5
    for (let i = begin; i < end; ++i) {
             ^
node.js:134
        throw e; // process.nextTick error, or 'error' event on first tick
        ^
SyntaxError: Unexpected identifier
...
</pre>

V8 doesn't grok the 'let' keyword, so we don't even get to the really cool part, the generator pattern using the yield keyword. 

V8's JS implementation does not support the array comprehension either. A simple comprehensions like this:
<pre>[x*x for each ( x in [1,2,3,4] )]</pre>
...gets you another error in V8:
<pre>SyntaxError: Unexpected token for</pre>

This is because the language features of V8 are relatively conservative; Google is fairly strict about <a href="http://goo.gl/rWaCP">maintaining compatibility with ECMAScript and Webkit</a>. Mozilla on the other hand benefits from pushing the envelope with JS features in Spidermonkey because Firefox is built *using* JavaScript, as are all Firefox Addons.

In his blog post Eich explicitly downplays the importance of Spidernode in terms of its impact on the node project:

<blockquote>We are not out to make a maintained, competing fork of Node, just a friendly downstream that should go away as soon as possible. We aren’t selling anything to Node users.

We <em>are</em> trying to improve SpiderMonkey’s API, test Harmony JS language features in the Node setting, and have fun learning about the new JS server side.[ <a href="http://goo.gl/Qvn6F">ref</a> ]</blockquote> 

I've been using Node for over a year now, largely around building scalable websocket servers to enable realtime communications for online games. It's kind of too bad we won't see these language features in node.js itself anytime soon; even a little bit of playing around with Spidernode is quite addictive!

Postscript: for you OS X / homebrew users out there, building Spidernode requires an older version of autoconf. Check out this <a href="http://goo.gl/z4VVZ">Homebrew recipe for autoconf213</a>, which I originally spotted on <a href="http://goo.gl/7BIX6">John Buckley's blog</a>.
