---
title: The importance of feeling validated
publishDate: 23 Jun 2022
name: Andre Wruszczak
description: How validated learning can help you become a happier developer
layout: ../../layouts/BlogPost.astro
---

## **Rating your performance**

As a developer it's not always easy to know if you are doing a good job.

We cannot simply count the amount of produce we helped make as it is a bit more abstract than that, we produce code - which is basically text after all.

Counting the lines of code written can be quite a misleading metric though. 
Especially while refactoring or bugfixing you can be super productive _deleting lines_, resulting in a negative amount of lines written.

New features are often described as _user stories_, maybe we could just count the amount of user stories implemented and deployed to production?

Sure, that's definitely an improvement, but *not all user stories are created equal*. Some might take several days or weeks to implement, others could be finished in a matter of hours. 

And now ask yourself this, if you spent several months on some user stories, finally deliver and the *user hates them* - are you doing a good job?


## **Lean methodology to the rescue!**

Recently I've read [the lean startup by Eric Ries](http://theleanstartup.com/)[^lean] and there was a part about validated learning that really resonated with me.

I don't want to paraphrase too much as it's a great book and you should read it, basically Eric Ries suggests adding a validation step before stories are considered done.

It should be the responsibility of the development team to make sure that the changes made to the code actually provide a benefit.
And in order to _prove_ that, meaningful metrics need to be introduced.

For example, let's say you implemented several form validation rules.
You could track if the amount of API-requests containing form errors go down.

Or maybe you could sit down with the users and observe if they react to the new form validation rules as expected.

Wait a second, let _developers talk to users_? That's absurd! **/s**

## **Hiding developers in the basement**  

I don't know about you, but all too often I've worked in teams that were deliberately kept away from the users they wrote sofware for. 

Often it's product managers or product owners minimizing the interaction between developers and users by working as some sort of proxy. 

Their intentions might be justified, maybe they want to protect the developers from demotivating or unconstructive feedback. Maybe the client themselves are too busy or important and letting the developers observe them use new features might suggest unprofessionalism somehow[^unprofessionalism].

And I'm sure not every developer wants to talk to their users all the time anyway, it's just that way too often there is a lot of distance between them making it difficult for conversations to get started even if they wanted to. 

Other times I got the feeling that the base assumption is that _no developer_ wants to talk to users _ever_.

Personally I love talking to my users, I always get super motivated afterwards! And I'm sure I'm no exception.

## **Why I build sofware**

Developers have different reasons why they code and what motivates them.

There are several approaches to categorizing developers and I've personally found the [3 tribes of programming](https://josephg.com/blog/3-tribes/) very helpful as I notice these 3 archetypes in my daily life as well:

> - You are a poet and a mathematician. Programming is your poetry
> - You are a hacker. You make hardware dance to your tune
> - You are a maker. You build things for people to use

In my case, I strongly identify with the _maker_. I write code in order to build things that help people.

Consequently I get frustrated whenever I notice that barely anyone uses the software I write, or if it is not helpful in the first place.

## **Happiness 🌈**

Therefore implementing validated learning into my workflow by monitoring if the changes I make provide any value, not only helps me do a good job - it also makes me feel happy.

Let me validate that I'm actually providing _value_.

Let me feel _validated_ and _valued_.

I ❤ the feeling of helping people with code - so please don't try to hide me from the users :D


[^lean]: Don't let the name fool you, it's very relevant to developers not interested in start ups too!
[^unprofessionalism]: In my personal experience, users were always super happy to talk to someone and give feedback - but I'm sure this can vary.