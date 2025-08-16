---
title: Agent mode for fun!
publishDate: 16 Aug 2025
name: Andre Liebermann
description: how agent mode brought me a ton of joy this week!
layout: ../../layouts/BlogPost.astro
---

## **Being busy**

I am currently quite busy. There was a bigger deadline happening at work and I am also actively working on several side projects as well.

Every now and then I do get an idea for a small project I would love to implement, but I normally just can't find the time to do so and sooner than later, the idea is forgotten and put to rest with all the other could-have-been-projects.

Pretty much exactly that was about to happen this week as well:

I've been watching a lot of [smosh](https://www.youtube.com/@smoshpit) videos with my wife recently, remember smosh[^smosh]?

They currently have a fun event going on - the smosh summer games. And as the fan I am, I thought about doing a small little fan page for it.

And thanks to agent mode, I actually did!

## [Smosh Summer Games](https://smoshsummergames.com)

The event is a throwback to the year 2005, where the cast members of smosh participate in various challenges in a fictional High School.

So I thought it might be fun to do a little fan page that is deliberately old-school looking, shouldn't be too much work right?

> And I would have gotten away with it too, if it weren't for [^scooby] ... work

Ah yes - work. Almost forgot about that. 

Well I surely could create a silly page like that in a day, but it's kind of hard to do so when I got a full-time job and side projects on top!

## Agent mode to the rescue

I haven't been exactly blown away by agentic coding so far, but I nonetheless pay for a [cursor](https://cursor.com) subscription, primarily because I love the tabbing. And some of the MCP stuff is genuinely helpful to me [^figma-mcp]!

> Agent mode is basically prompting an AI Tool like cursor to generate a bunch of code, hoping it fulfills the requirements you prompted it with (*spoiler: it normally doesn't*)

So after having tried agentic coding every now and then, I have somewhat settled on just ignoring it for the most part - as I can't be assed to rewrite most of the code it spits out. I'd rather just write it myself.

But my time is limited - and *I have no time for games*[^syl] ... at least so I thought!

I realized that for such a small fan project, maintainability is not that much of an issue so I just prompted cursor to do the whole thing for me!

And it did!

Worked ok-ish I must say. The minimal scope and using [astro](https://astro.build/) made this quite easy for the most part.
AI is generally not horrible at writing code in domains that are well documented and have a shit ton of blog posts about it: therefore it's mostly ok at doing vanilla web stuff.

So here I was, working on some enterprise stuff for my main job, while in the background AI coded a whole fan page for me!
Sure - I needed to adjust certain things here and there, edit my prompts and nudge it in the right directions, but it did manage to get the stuff done. And even more importantly: **with minimal intervention by me.**

## The tricky stuff

Static websites with shitty designs is a thing AI can pull off by now (at least somewhat consistently). Where it all fell apart though, was the actual interactivity.

I wanted to include fan votings: visitors should be able to vote for their favorite team / person and so on. 

![voting](/assets/blog/agent-mode/voting.png)

These votes needed to be persisted somehow.

Sadly AI kept trying to introduce all sorts of third party libraries and I still don't agree that third party tools like that are necessary for basically a temporary, throwaway website.

It was very insistent on me using either [supabase](https://supabase.com/) or [turso](https://turso.tech/) - and those might be fine tools, but just overkill for this imho.

Thankfully, astro actually supports just [having a local DB file](https://docs.astro.build/en/guides/astro-db/#url-scheme-and-host) and that's what I opted for instead.

To make this work with my rolling deployments in [coolify](https://coolify.io/)[^coolify] it did end up costing me some time after all.
Luckily, coolify does offer a solution for that: [Persistent storage](https://coolify.io/docs/knowledge-base/persistent-storage).

So at the moment the astro website just interacts with a local `.db` file - sure this is not the most scalable of solutions, but it truly doesn't have to be.

## Fleeting websites

At this point of time, smosh summer games are already over and my fanpage did it's job!

Over 400 people visited the website and over 80 actually voted on stuff.

Around 25 people also commented on it and it genuinely made my week to read those comments of people enjoying this silly little thing I made.

I especially loved this retro comment!

![retro comment](/assets/blog/agent-mode/comment.png)

:D So 2005!

Maybe agent modes can bring back those silly little fanpages that seemed to be quite the rage two decades ago?

That would certainly be a lovely thing to happen.

There is still room in the web for fleeting websites.
Websites that are not designed for millions of users, but bring joy to at least a couple of people instead.

Feel free to check out the [final fan page](https://smoshsummergames.com), hopefully it inspires you to do something that brings joy to you and others!

[^smosh]: You might now them as the first channel to get 1000 subscribers on youtube! :D They old y'all! 
[^scooby]: [Ruh-roh!](https://scoobydoo.fandom.com/wiki/List_of_%22And_I_Would_Have_Gotten_Away_With_It_Too,_If_It_Weren%27t_For_You_Meddling_Kids%22_Quotes)
[^figma-mcp]: I got high hopes for this one. I have been using it a bit but there is still a ton of room for improvement. I might write a blog post about it :)
[^syl]: [The edgiest of queens](https://www.youtube.com/watch?v=d1HsU1DTLH4)
[^coolify]: Still think it's [cool](https://andrewru.com/posts/coolify) though.