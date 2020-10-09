+++
date = "2016-06-05T21:45:00+02:00"
title = "On Handling Security Issues"
url = "/written/on-handling-security-issues"
+++

Security is kind of an odd companion which walks with you in your web developer career. It (should) always been taken care of. If you don’t take care of it, really bad things can happen. Security is often misunderstood. And a quite often, very emotional to talk about. Because it’s at the heart of every relationship: it’s about trust.

In my career I witnessed some quite severe and some not so severe security issues. Interesting was the handling of the issues both from the programmer point of view as well as from the management point of view. (Well, I can say this seeing it from now. At the time the incidents happened, it was not very interesting but stressful and tense.)

There are a few points I think are helpful when dealing with security:

Understand that *security is not black and white*: Security is a feature which often works completely against other features like usability or performance. There is always a trade off: The most secure application is the one without any feature. There is of course a part of security which is always bad: A SQL injection is never something wanted. But security is much more than that.

*Security is not a knowledge issue*. If it were, then there shouldn’t be any security holes in any moderate big website. But they are. And I’m sure there will be much more discovered. While there are some security holes here because the programmer did not know about a vulnerability I bet the far bigger part of it is a awareness issue. It was just overseen. Which of course is not good. But not fixable with having the programmers learn the security basics.

This point is also important because it shows that if you send your team to a „Security 101 Course“ if you found a vulnerability is probably useless and could be also offensive to the team. (I of course assume that the programmers have a basic knowledge of web programming, but I’m sure they do when they work for a reasonable big website.) It also hints to treating fellow programmers who committed the security holes not as idiots who don’t understand their job. Instead you should aim at finding ways to raise the security awareness again and again. And to improve security constructive.



