---
title: Coolify!
publishDate: 21 Jul 2025
name: Andre Liebermann
description: the coolest way to setup your own personal cloud!
layout: ../../layouts/BlogPost.astro
---

## Deploying stuff can suck

A long, long time ago I remember working on a tool **'FOO'** that was used by one of the biggest automotive companies in the world.
**FOO** had been developed and maintained for almost a decade when I joined the team.

At that point, the automotive company had started to abide to higher security standards and **FOO** was constantly flagged and it was not possible to actually upload a new version through normal means.

The crafty people in the team came up with a smart way to circumvent this though:
they would access the server where **FOO** was running, directly and simply manipulate the files directly.

Awesome.

Every now and then **FOO** would crash and burn. Didn't really matter all that much though, as barely anyone was still using it anyway.

## The typical web developer experience

To be honest, as primarily a web developer I've been spared having to deal a lot with actually deploying stuff.

I normally just write code and once my changes are reviewed and accepted, a new build is automatically created and deployed on the server.

Actually setting this sort of stuff up oneself, can be quite annoying though!

## The primitive way

For personal projects I tended to use [uberspace](https://uberspace.de/en/). I liked how they not just provide you with a vServer, but also give you a set of tools to manage your server. They really want to teach you to get comfortable with server administration - not that I ever got to that point.

Recently I worked on a new personal project and my workflow was the following:

1. make changes and merge it to the main branch
2. build the main branch locally
3. sftp the build files locally to the server

I also automated step 2 and 3 with a small shell script. I guess I also could have automated this further with some github actions.

This sucks though - I don't always want to do this manually.
There is also no backup - no nothing.

As I was maintaining multiple projects, I was slowly running into higher costs as well. That' why I was looking for new options.

## The cool way

Cheaper than €5/monthly per project is to host all projects on one singular vServer e.g on [hetzner](https://www.hetzner.com/).

[Coolify](https://coolify.io/) is a pretty cool open-source tool that helps developers like me streamline this deployment process. It is basically a self-runnable cloud provider :)

Hetzner even provides a possibility to setup a vServer immediately with Coolify out-of-the-box!

After connecting it to my private Github account, it's super easy to setup new projects and host them on this server :)

Now my workflow works the following way:

1. make changes and merge it to the main branch

That's it :D

Awesome. Pretty cool. I love it!