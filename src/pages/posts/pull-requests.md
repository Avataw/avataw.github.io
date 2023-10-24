---
title: How to pull pull requests off 
publishDate: 27 Oct 2023
name: Andre Wruszczak
description: Pulling off the Band-Aid - quick and effective pull request practices"
layout: ../../layouts/BlogPost.astro
---

## **Software and card games**

Developing software is exactly like coming up with the rules for a card game[^cardgame].
Imagine it having a rulebook with the following rules:

1. Every player draws two cards
2. Every player passes one card to the person left of them
    - If any person now has a pair - they win!
    - Otherwise everyone passes another card and so on...

Well - it might not win game of the year anytime soon, but it's a card game alright.
Now software is usually a lot more complex than that - imagine a rulebook with 1000 _rules_.

Or 10000 _rules_.

In fact, there are so many _rules_ necessary to build software, that it's usually not feasible to do everything by yourself.

## **Creating as a team**

Now imagine 10 card game developers, sitting around this rulebook.
They could each just grab the rulebook and write new rules into it or cross existing ones out. This would most likely escalate to pure chaos [^heresy] in a matter of hours.

Instead what developers usually do is the following:

1. If any developer wants to change a page of the rulebook, they make a copy of the entire rulebook
2. Then they change that copy accordingly
3. Finally they show that copy to the other developers
    - If any of the developers agrees with those changes, the copied rulebook is now the new version of the rulebook
    - If any of the developers does not agree with those changes, they recommend some improvements to be made.

## **Benefits of reviews**

_Showing that copy_ to other developers is what is known as a pull request. It might just as well have been called _'change request'_. Actually - now that I think about it, that name is probably a sufficient explanation in itself[^explanation].

Reviews can lead to a lot of knowledge sharing between the developers.
Every single developer might not have written the entire rulebook by themselves but having reviewed the other changes, they still know their way around it.

Sometimes developers also overlook potential problems, typos or similar problems. These often get picked up in reviews too.

A review is also a good opportunity to teach each other some nifty tricks too. Maybe by referencing another rule on page 13, the new rule can be reduced to one sentence?

## **Putting yourself out there**

Still, creating a pull request can be a daunting task for a developer.
Maybe you're thinking:

- What if people laugh at you?
- What if you messed up something super critical?
- What if you left the curse words in from when you were debugging at 1 am last night?

And I get it, in a way you are putting yourself out there too. This can be especially frightening if it's your first pull request in a new team.

Don't worry though, it's most likely going to be fine.

And if someone actually laughs at you, shame on them, they are doing an awful job at reviewing.

## **Reviewing Pull Requests**

First rule of reviewing pull requests: don't laugh.

Anything else is pretty much optional.
If you actually want insights on how to review I recommend the [Code Review Pyramid](https://www.morling.dev/blog/the-code-review-pyramid/). I often blimpse on it while reviewing.

Blub.

[^cardgame]: don't quote me on that, okay?
[^heresy]: _Blood for the [blood god](https://knowyourmeme.com/memes/blood-for-the-blood-god), rules for the .. rulebook?_
[^explanation]: well, now I've already written that whole card game analogy. Oh well..
