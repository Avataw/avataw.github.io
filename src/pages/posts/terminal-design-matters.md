---
title: Designing your terminal matters 
publishDate: 16 Jun 2022
name: Andre Wruszczak
description: Your windows shell should be so beautiful, you'd bring it home from the beach.   
layout: ../../layouts/BlogPost.astro
draft: true  
---

## **The irrational fear of terminals**

As a developer it is easy to forget that most people don't actually interact with terminals on a daily basis.

I'd even go so far as to say that most people don't associate positive emotions with terminals.

For example when I was a teenager, some games had scripts running on installation and I remember thinking that I got hacked when the terminal popped up - some text appeared and the terminal close itself again.

Naturally I immediately unplugged the PC and was terrified of turning it back on again.

### Gradual acceptance

When I started programming, I was quite annoyed whenever I needed to open up a terminal for things to work properly.

You can say what you want about Windows, but I'm sure many junior devs hated manually interacting with the Windows UI to make stuff work so much that they started using the terminal just because of that[^env].

Finally when I started regularly interacting with servers that often do not offer you any alternative to using a terminal - I made my peace with it[^peace].

## **Ugly Terminals :(**

As a windows user I grew up with `cmd` which is as unstyled as they come.

![cmd](/assets/blog/terminal-design-matters/cmd.png)

And to be honest I never really warmed up to it's more capable silbling, the `Powershell` either.
Even though some windows sysadmins I know swear on it - it's just so ugly :x

Can you blame me? I mean just look at this hideous error message display!

![powershell](/assets/blog/terminal-design-matters/powershell.png)

For a couple of years I just half-heartedly used the `bash` that ships with Git and accepted the ugliness of my terminal on my private windows machine.

## **Trapped in the Windows Dimension**

For many years I felt trapped in Windows as most VR/AR technologies did not function properly on Mac or Linux.

Thanks to [WSL](https://docs.microsoft.com/en-us/windows/wsl) I nowadays enjoy being able to game (which sadly still works best on Windows) and hobby code on the same machine, no dual booting required.

That being said, the WSL shortcut generated after installation is just a `wsl` command run on your default terminal.

Therefore even though I was using Linux on Windows, my terminal still lacked style. 

## **Windows redemption arc with 'Windows Terminal'**

Recently Microsoft has been gaining a lot of favors with developers by releasing nice open-source tools such as [VSCode](https://github.com/microsoft/vscode) and the [Windows Terminal](https://github.com/microsoft/terminal), the latter being an actually decent terminal!

And now just look at this beauty!

![windows-terminal](/assets/blog/terminal-design-matters/windows-terminal.png)

It has tabs! I also configured it with a lovely acrylic background and my current go to color theme: [Dracula](https://draculatheme.com/)!

Currently I use [starship](https://starship.rs/) for my prompt and the [FiraMono Nerd](https://github.com/ryanoasis/nerd-fonts) font. 

## **Style... over... Substance?**

Even though I'd love to write more about my specific terminal setup - that is not the point of this post.

I feel like software engineers especially, often focus on the pragmatic and function-oriented aspect of things:

> Give me six hours to chop down a tree and I will spend the first four sharpening the axe.
>
> -- Abraham Lincoln (software engineer at heart ... probably)

And yes - I wholeheartedly agree with this sentiment, 
*but style does matter!*

After spending the last couple days tinkering with my terminal design, it brings me joy every time I open it up!

Believe me when I say that I am now *actively looking for opportunities* to use my precious shell every chance I get. 

And I ❤ every second of it.

So feel free to quote me on this :
> Give me six hours to implement an important bugfix and I will spend the first four styling my shell[^shell].   
>
> -- Andre Wruszczak 


[^env]: Environment variables for example: `setx -m JAVA_HOME "C:\Java\jdk_1.8"` anyone? :D
[^peace]: No more unplugging the PC and living in fear for me! Ha!
[^shell]: And the rest probably on stackoverflow..