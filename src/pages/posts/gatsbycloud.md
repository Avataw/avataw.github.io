---
title: Gatsby Cloud Hosting
publishDate: 04 Mar 2021
name: Andre Wruszczak
description: I love simplifying my CI-pipeline
layout: ../../layouts/BlogPost.astro
---

> ⚠️ This is outdated, the current blog uses [Astro](astro.build) and is deployed via [Github Pages](https://pages.github.com/)!

As you might have read in [my first blog post ever](/posts/valentines), I currently
use **Gatsby Cloud** to build this blog and **Vercel** to deploy and host it.

Of course you have read it. You are a nice person.

### Save the environment! Only host your blogs once

So far my current pipeline served me well - but recently I've noticed that **Gatsby Cloud** automatically hosts my blog
on some [weird internal URL](andrewru.gatsbyjs.io).

Which is kind of a waste - I don't really need my site to be hosted
twice!

Lucky for me, just a couple days ago [Gatsby Cloud now offers hosting too !](https://www.gatsbyjs.com/blog/introducing-gatsby-cloud-hosting/)

In conclusion...

With tears in my eyes... I need to say my goodbyes to Vercel.

![RipVercel](/assets/blog/gatsbycloud/ripVercel.png)

You served me well old friend! I will never forget these magical ~18 days we had! **Never!**

### Anyways

Now my blog only gets build and hosted at one service, which hopefully reduces unnecessary data traffic.

![new workflow](/assets/blog/gatsbycloud/newWorkflow.png)

### Next Steps

Well the new hosting option was introduced alongside much bigger news: [Gatsby v3 was released!](https://www.gatsbyjs.com/blog/gatsby-v3/)
The most interesting part for me is going to be the incremental build times.

Sadly I was not able to update my blog because of some ominous **GraphQL** exceptions.

A topic for another day. Another blog post probably too :)

Until then ~

I ❤ simplifying my CI pipelines!
