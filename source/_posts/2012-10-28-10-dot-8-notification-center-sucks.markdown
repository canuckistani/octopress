---
layout: post
title: "10.8's Notification Center sucks"
date: 2012-10-28 14:53
comments: true
categories: 
---

Based on the <a target="_blank" href="https://twitter.com/arturadib/status/261644486784974848">advice of a friend</a> I upgraded 3 laptops to Mountain Lion last night. Once I downloaded the installer and restored the ESD <a target="_blank" href="http://lifehacker.com/5928780/how-to-burn-os-x-mountain-lion-to-a-dvd-or-usb-flash-drive">to a USB key</a>, everything really smoothly. I only have 1 major compatibility issue - my <a target="_blank" href="http://global.focusrite.com/usb-audio-interfaces/vrm-box">Focusrite VRM</a> box is not yet supported.

I of course spent a goodly amount of time poking around the new OS ( as you do... ). I was particularly interested to see how notification center works. Notifications on OS X have been a <del>cluster...</del> er, not ideal for a long time, depending on the possible presence of 3rd part app Growl to work at all. In the Jetpack apis we currently fail hard and silent on OS X when Growl isn't installed, so add-on developers really can't rely notifications working and develop add-on features around them. There are <a target="_blank" href="https://github.com/fwenzel/copy-shorturl/blob/master/lib/simple-notify.js">some</a> <a target="_blank" href="https://github.com/canuckistani/jp-notificationbox">workarounds</a>, but the whole thing is a bit ugly and hacky.

If you are running Firefox on 10.8, any notifications will be sent to Notification Center instead of Growl even if Growl is present and running. For add-ons that use Jetpack's apis, this makes things 33% worse, as there are now 3 behaviours that could occur when notify is called:

* if OS X is < 10.8 and Growl isn't installed, the notification is printed to the JS log.
* if OS X is < 10.8 and Growl *is* installed, we see Growl which, give how configurable Growl is, could mean almost anything.
* on 10.8 notifications from Firefox are handled by Notification Center, which only displays a notification on-screen if Firefox *isn't* focused.

This is a mess. Add-on developers ( and html5 app developers! ) need a reliable, predictable way to show the user notifications that work consistently across platforms. The behaviour needs to be both helpful but also unobtrusive for users, with the right balance of features. In my mind the essential requirements are:

* if the user allows notifications, display notifications regardless of whether the app ( Firefox ) is focused or not. If I have written a chat application, for example, I'd love to be able to get the user's attention if the tab my app is loaded into isn't visiable, regardless of OS-level application visibility.
* provide a decent api for notification 'flair' - images, titles and text feel essential to me. For example, if I my chat app displaying notifications, it would be great to show the avatar image of the user sending the message that the notification was triggered by.
* provide a way for the app or add-on to react to the click event by accepting a callback - again with my chat app, clicking the notification should be able to change focus to the window and tab where the notification originated from.
* notifications should disappear after $some_low_number of seconds if there is no user action.

Frustratingly, Notifications on OS X fail in all of these cases:

* notifications aren't visible at all if Firefox is focused - they ust get stacked up in the Notifications UI with no visible indicator that anything has happened.
* there is now way to use a custom image in a notification.
* we don't fire the onClick handler for the notification, because clicking on the notification bubble only focuses the notifying app.

The most important use case I see is that any add-on or any app running in any tab should be able to request the ability to display notifications, and those notifications should be able to trigger a callback so that the developer can react to the click. The real-time web is upon us and I see this notification gap as being a real drag on what developers can do with social communications using WebSockets. Apple's solution simply isn't webby enough to help.

I am cautiously optimistic that a <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=782211">Mozilla implementation</a> of the <a target="_blank" href="http://www.w3.org/TR/notifications/">w3c notifications spec</a>. I'm a bit worried though, as the feeling seems to be that if an OS implements notifications <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=782211#c18">we should always use that</a> instead of a generic implementation. Notification center is too weird and limited to really be useful, so I would argue against using it. For Jetpack in particular, my preference would be to use our implementation regardless of OS version so we can provide add-on developers with a reasonable feature set they can rely on.
