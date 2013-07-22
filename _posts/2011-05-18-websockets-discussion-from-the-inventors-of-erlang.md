--- 
created: 1305735412
title: Websockets discussion from the inventors of Erlang.
layout: post
---
A discussion with Joe Armstrong and Robert Virding on a bunch of things around Erlang, including some work Joe is doing on Websockets:

http://www.infoq.com/interviews/armstrong-virding-erlang-future

Virding's criticism of the data framing in websockets is that is just breaks up an actual socket, and he doesn't see the point. I would say to him: "The websocket framing bits is for idiots like me who need the underlying software to decide when a message starts and ends." We can't all be the inventors of Erlang. ;)
