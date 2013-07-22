--- 
created: 1251411479
title: Hooking up Sugar Byte's Eloquence to Midi, etc
layout: post
---
<p>I acquired <a href="http://www.sugar-bytes.de/content/products/Eloquence/index.php?lang=en">Eloquence</a> a little while ago but have been so busy I only got around to seriously fiddling with it a couple of days ago. I fired it up in Ableton, created another MIDI track and plopped Massive into it, and then was immediately stumped on how to get them hooked up. It's quite possible, just very <i>subtle</i>. This post is for others googling around looking for a straight-forward explanation.</p>
<p>Step 1: Set up. Create two Midi tracks, put Eloquence into the first and some other synth into the second:</p>
<p><img src="http://www.canuckistani.ca/sites/default/files/Picture 1.png" width="191" height="465" alt="Picture 1.png" /></p>
<p>2. In the second Midi track, set the input to ( no surprise! ) Eloquence:</p>
<p><img src="http://www.canuckistani.ca/sites/default/files/Picture 3.png" width="198" height="459" alt="Picture 3.png" /></p>
<p>3. This is the somewhat tricky part, for the Input channel drop list right below, <i>also</i> select 'Eloquence':</p>
<p><img src="http://www.canuckistani.ca/sites/default/files/Picture 4.png" width="186" height="465" alt="Picture 4.png" /></p>
<p>Aside: it took me the better part of 20 minutes swearing and googling and fiddling things before I even <i>noticed</i> this option. Subtle.</p>
<p>4. And of course, as usual you should either have the track armed as above, or set the input monitoring for the track to 'On' so the midi actually gets to the synth.</p>
<p>5. Another one that had me mystified was that, by default, eloquence does not start output automatically when you hit play, etc. Too slave Eloquence to the transport, you need to set it to 'Host' mode:</p>
<p><img src="http://www.canuckistani.ca/sites/default/files/Picture 7.png" width="244" height="354" alt="Picture 7.png" /></p>
<p>Hopefully this post gets google-able and save someone else some time.</p>
