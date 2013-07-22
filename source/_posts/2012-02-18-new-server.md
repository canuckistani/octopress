--- 
created: 1329626070
title: New server
layout: post
---
*__TL;DR__*: my linode got hacked somehow so I moved this blog to a new server.*

Last week I got a notice from the helpful folks at Linode informing me that my machine was trying to brute-force other machines on their network. Essentially, this is what I get for having a weak password on one of the accounts ( the attacker never got root access ) and running sshd on port 22. 

For a variety of reasons, I didn't get around to completely paving the old box until today. I just changed the sshd port, changed all the passwords once that was done, checked out a few things on the box, and left it. Last night I built a new linode, copied essential site data over and got everything running. About a half an hour ago I flipped ip addresses between the two machines, and that's why you just got a bunch of old blog posts in your rss reader. 

Sorry! It's literally been the kind of week where getting my server hacked by some bored russian teenager is just a minor distraction.
