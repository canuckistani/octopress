---
layout: post
title: "Coffee &amp; Cake"
date: 2012-07-15 22:34
comments: true
categories: coffeescript,javascript
---

I posted [recently](/blog/2012/07/08/meta/) about the sudden move over to [Octopress](http://octopress.org/). The slightly frustrating thing about using Octopress is the ruby angle, at least in the sense that it took a while to get a workable install going. This is probably mostly my fault, somewhat Apple's fault, and maybe a little bit about ruby. Some of it was also Jekyl though, and the workflow in Jekly / Octo is also a little awkward.

The most irritating bit is this:

```bash Friction
rake new_post["some title here"]
```

I'm whining, sure, but this is just more punctuation than I really need. So because I'm a hacker first, I decided to fix this. What did I do? I didn't go off to learn rake, fork Octopress and make a pull request - it's even more stupid than that. I learned ( bits of ) coffeescript so I could hack on a Cakefile to wrap the Rakefile. I know, idiotic, but fun nonetheless:

```coffeescript Sugar on top
{spawn, exec} = require 'child_process'
{ ask } = require 'ask'

task 'new', 'create a new blog post', ->
	# get stdin here...
	ask 'New post title: ', /.+/, (name) ->
	  	exec 'rake new_post["'+name+'"]', (err, stdout, stderr) ->
		    throw err if err
		    s = /^.+\: (.+)\n$/.exec(stdout)
		    path = s[s.length - 1]
		    forked = exec "subl #{path}"
		    process.exit 0
```

The key bits are: 

* the wrapper task removes the punctuation
* as an added bonus, the callback opens the new markdown file in my editor!

This was also the first non-demo / hello-world-ish code I've written in Coffeescript, and it's not bad! There are things that definitely feel a bit awkward ( chaining methods, how callbacks work, etc ) but I think that is mostly just JS muscle memory I need to get over.

Another inspiration for trying on Coffeescript for size was this recent post by Rob Conery called '[Try it quiet](http://wekeroad.com/2012/07/04/try-it-quiet)', and the accompanying video on Vimeo:

<iframe src="http://player.vimeo.com/video/43548699" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <div style="font-size: 75%;"><em><a href="http://vimeo.com/43548699">Rob Conery - Real World NodeJS - Creating the Tekpub API</a> from <a href="http://vimeo.com/ndcoslo">NDCOslo</a> on <a href="http://vimeo.com">Vimeo</a></em>.</div>

All of the Mocha tests are written in Coffeescript, and the cleaner syntax really clarifies the tests and expectations. It's worth watching and even hacking along to if you're unfamiliar with the bits of node he's showing off. I was particularly charmed with how he runs mocha -w in a terminal and, as he implements things, more and more tests pass. Of course, you can't beat Daft Punk live for a soundtrack either! :D


