---
title: How to pull pull requests off 
publishDate: 27 Oct 2023
name: Andre Wruszczak
description: Pulling off the Band-Aid - quick and effective pull request practices
layout: ../../layouts/BlogPost.astro
---

## **Software and card games**

Developing software is exactly like coming up with the rules for a card game[^cardgame].
Imagine it having a rulebook with the following rules:

1. Every player draws two cards
2. Every player passes one card to the person left of them
    - If any person now has a pair - they win!
    - Otherwise everyone passes another card and so on

Well - it might not win game of the year anytime soon, but it's a card game alright.

Now software is usually a lot more complex than that - imagine a rulebook with _1000_ rules.

Or _10000_ rules.

In fact, there are so many rules necessary to build software, that it's usually not feasible to do everything by yourself.

## **Working in a team**

Now imagine 10 card game developers, sitting around this rulebook.
They could each just grab the rulebook and write new rules into it or cross existing ones out. This would most likely escalate to pure **chaos**[^heresy] in a matter of hours.

Instead what developers usually do is the following:

1. If any developer wants to change a page of the rulebook, they make a copy of the entire rulebook
2. Then they change that copy accordingly
3. Finally they show that copy to the other developers
    - If any of the developers agrees with those changes, the copied rulebook is now the new version of the rulebook
    - If any of the developers does not agree with those changes, they recommend some improvements to be made.

This allows every developer to work on their changes simultaneously instead of having to wait for the rulebook too.

## **Benefits of reviews**

_Showing that copy_ to other developers is what is known as a pull request (or **PR**). It might just as well have been called _'change request'_. Actually - now that I think about it, that name is probably a sufficient explanation in itself[^explanation].

Reviews can lead to a lot of knowledge sharing between the developers.
Every single developer might not have written the entire rulebook by themselves but having reviewed the other changes, they still know their way around it.

Sometimes developers also overlook potential problems, typos or similar problems. These often get picked up in reviews too.

A review is also a good opportunity to teach each other some nifty tricks too.
For example: 'maybe by referencing another rule on page 13, the new rule can be reduced to one sentence?'

## **Putting yourself out there**

Still, creating a PR can be a daunting task for a developer.
Maybe you're thinking:

- What if people laugh at you?
- What if you messed up something super critical?
- What if you left the curse words in from when you were debugging at 1 am last night?

And I get it, in a way you are putting yourself out there too. This can be especially frightening if it's your first PR in a new team.

Don't worry though, it's most likely going to be fine. So just pull[^pun] off that band aid and do it.

And if someone actually laughs at you, shame on them, they are doing an awful job at reviewing.

### What you can do as the reviewee

That being said, I'd still recommend trying to make your PR as easy to review as possible.

Keep your PRs small and coherent. It helps if your user stories are [vertically sliced](https://www.visual-paradigm.com/scrum/user-story-splitting-vertical-slice-vs-horizontal-slice/) too. Otherwise provide the needed context in the PR description.

Another thing you can do is to really make sure that your individual commits make sense and are self-contained.
It can be easy to overlook important changes if the're muddled in with some format changes all in the same commit.

## **Reviewing Pull requests**

First rule of reviewing PRs should go without saying, but just to make sure: **don't laugh**.
You should approach this as a benevolent mentor, providing guidance or an eager student, asking for clarification.

Feel free to point out any typos or other minor things but this shouldn't be the focus of your review.
Personally I keep coming back to the [Code Review Pyramid](https://www.morling.dev/blog/the-code-review-pyramid/) and I agree with the concept wholeheartedly. It recommends focusing on the API and implementation semantics over things like code style.

Speed is also an important factor, you should try and prioritize reviewing PRs in your team.

Once, I've had to update a year old PR in a frontend monolith, that was not completely finished back when it was created. It took me roughly a month to finish it up and update it so that it could be merged in to the main branch. Funnily[^funny] enough it took another couple months and some additional effort until it actually was.

## **Conclusion**

Creating and reviewing pull requests is an art and its importance can (at least in my opinion) **not** be overstated.

It also has a big impact on team dynamics.
Therefore I urge you to treat pull requests with the respect they deserve.

[^cardgame]: don't quote me on that, okay?
[^heresy]: _Blood for the [blood god](https://knowyourmeme.com/memes/blood-for-the-blood-god), rules for the .. rulebook?_
[^explanation]: well, now I've already written that whole card game analogy. Oh well..
[^pun]: see what I did there? I really pulled that pun off didn't I.
[^funny]: so funny. Haha. What a great use of my time. Haha.
