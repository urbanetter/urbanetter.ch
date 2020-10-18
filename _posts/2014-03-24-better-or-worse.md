---
layout: default
title = "Better or Worse"
---

Following some [traces](https://twitter.com/shawnacscott/status/442010230382018560) on Twitter, I found this [podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) where they talk with DHH, the creator of Ruby on Rails, about software design decisions.

David told that for him, the most important point of making decisions about code is to actually see a code before and after a certain refactoring or feature.

Show real world code before you do a refactoring/ new feature and after it. It should be imidiately clear that the new code is simpler and better. A quote from the transcript: 

> "You will see the code and you will see whether it’s better or whether it’s worse."

He argues that a lot of the so called "subjective" point of views are basically not subjective because if you step away from it and judge the code objectively, most of the programmers come to the same conslusion.

> "These things that sound [...] subjective are actually not that subjective because I find that most reasonable people actually agree."

And this verdict is actually the only one which matters. And we should value this verdict higher than any other rule or "best practice" we somehow should respect. Because if the rule is against the better code then it is not fullfilling it's purpose.

What's also interesting is that he says that he does not abstract a pattern until he sees it 3 or 4 times in a codebase. This is strictly speaking a violation of the "DRY" principle, which was pushed a lot by RoR. This also shows that he thinks that you should not blindly follow a rule.

> And then, we move into these abstract discussions about one principle or another without staying in close contact with the code. And that just is not a very interesting sort of exercise to me.

A lot of this rings true to me. And yet, we spend so much time about arguing which is the right pattern to use or if a name is accurate. At the end it does not matter. Because you either have better code, or worse code.
