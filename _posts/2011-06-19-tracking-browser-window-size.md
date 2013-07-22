--- 
created: 1308467902
title: Tracking browser *window* size.
layout: post
---
I though this was interesting, as someone who uses a number of devices with different browsers and ( on my laptop & desktop ) high resolution monitors and whiz-bang window placement tool [Divvy](http://mizage.com/divvy/):

<blockquote>We often talk about screen resolution, which is not the relevant statistic when thinking about what space our website's visitors have available. The relevant statistic is browser window size.</blockquote>  

*From [here](http://css-tricks.com/2011/06/screen-resolution-notequalto-browser-window-9778)*

I know from my own use that my browser size varies a lot, and can also depend on what else I'm using currently on the desktop ( and editor, for example ). I also  know from experience that collecting data as suggested in this article is not really scalable. Here's a much faster solution using jQuery and a simple pixel fire:

    $('body').append('<img src="http://some.site.com/windowsize.png?x=' 
    + $(window).width 
    + '&y=' + $(window).height + '">');

Pixel fires can be collected with from log files or proxied into something like Redis or MongoDb an order of magnitude faster than dumping fields into MySQL, so if you're running very busy sites and need to collect this kind of data, this is a hint at a way to do it in a high performance way.

*Edit: late night blogging faux pas, forgot to include the link!*
