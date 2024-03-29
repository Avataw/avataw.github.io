---
title: Happy Valentines Day, I love deploying this blog!
publishDate: 14 Feb 2021
name: Andre Wruszczak
description: How I currently deploy my blog with Github, Gatsby and Vercel.
layout: ../../layouts/BlogPost.astro
---

> ⚠️ This is outdated, the current blog uses [Astro](astro.build) and is deployed via [Github Pages](https://pages.github.com/)!

### Happy Valentines everyone

Hopefully you have someone to share _**the love**_ today (or any other day actually ~) but just in case you don't, maybe you too will
love how easy it can be to host a blog :)

#### How to get started as quickly and easily as possible

So here is my current workflow enabling me to update my blog as easily as possible:
![workflow](/assets/blog/valentines/workflow.png)

If you want to copy my exact setup you will need the following steps:

- You need a Github account for your repository. Changes to your blog will be saved here.
- Gatsby Cloud offers an easy way to build gatsby projects and deploy them to a hosting provider like ...
- Vercel, a very simple (and if you use it personally, free) hosting provider
- If you want a custom domain (e.g <www.andrewru.com>) you need to purchase it first :)

##### [Gatsby Cloud](https://www.gatsbyjs.com/cloud/)

1. Click on the **add a site** button in Gatsby Cloud
2. Select **Start from a template**
3. Choose one of the templates, preferably one that doesn't use another service as a CMS.
4. Name your repository.
5. Allow Gatsby Cloud to use your Github account for the creation of the repository
6. Go into the Site Settings of your new blog and depending on the template you might need to delete the google analytics environment variables

##### [Vercel](https://vercel.com/)

7. Click on the **new project** button in Vercel
8. Allow Vercel to access your github repositories
9. Import the newly created repository
10. Select your personal account
11. Back in Gatsby Cloud in the Site Settings/Integrations you can **Connect** Vercel in the Hosting integrations
12. In the project settings in Vercel you need to set up your Domain if you do not want the predefined vercel domain.

At this point, everytime you push commits to your repository's main branch, Gatsby will build it and Vercel will deploy it.

**Wow so easy! Much simple!** Especially if you have to spend several hours googling and asking people if you need
an imprint and privacy disclaimer (spoiler: if you live in Germany you probably do :/)

##### Stuff to consider

So you probably don't want to give Gatsby Cloud and Vercel full access to all your repositories.
In the future I might check if it isn't easier to just use [github actions](https://github.com/features/actions) directly
especially because I am not a huge fan of the current build outbut by Gatsby Cloud. If it fails well... 🤷

##### Conclusion

Well maybe this was not the easiest and quickest way possible... but it does beat setting up your own server and
manually drag'n'dropping your built stuff via FileZilla.

Anywhooo now that it's up and running it's as easy as ```git push``` in order to update this site :))

I ❤ it.
