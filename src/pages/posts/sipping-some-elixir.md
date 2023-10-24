---
title: Sipping some Elixir
publishDate: 14 Oct 2023
name: Andre Wruszczak
description: The easiest functional language to get into?
layout: ../../layouts/BlogPost.astro
---

## **My history with functional programming**

So I don't consider myself an amazing developer. Neither do I dream in Haskell, nor do I work on the linux kernel in my spare time. And I'm cool with that.

I do know some pretty good developers though and many of them have dabbled their fair share in a functional programming language. There seems to be some correlation going on between functional programming languages and good developers.

Maybe it's dabbling with those languages that actually make you a good developer.
Or (in my opinion more likely) some good developers just naturally gravitate to those languages while bad ones shy away from them.

Most universities probably start with an object-oriented programming language, as those are quite easy to explain and offer a gradual introduction to the modeling of code. I remember those awful Java classes very well.

The first time I actually wrote in a functional language was in one of my favourite classes: 'Programming Paradigms'. It was a breath of much needed fresh air to write some small programs in languages with completely different concepts and ideas!

One, if not the most challenging one for me was **Haskell**.
Some of it concepts were just so foreign to me that I felt completely overwhelmed.
Most of the online explanations for e.g monads [^monads] were also relying on a theoretical background that I clearly lacked.

Over the years I used some functional paradigms in not fully functional languages like **Kotlin** or **Typescript**.

And yet I never fully dabbled.

## **Forcing [^ai] ChatGPT4 to teach me some Elixir**

Every year in december, insatiable coders take part in the [Advent of Code](https://adventofcode.com/). It truly has a fabulous community and I wholeheartedly enjoyed participating the last two years.

It's fun! It's also a great way to start learning a new programming language.
Therefore I'm working myself through the challenges of 2018. Feel free to checkout [my progress so far](https://github.com/Avataw/advent-of-code-2018).

Personally I am not the biggest fan of reading through extensive documentation before getting my hands dirty.
Therefore I tend to stumble a lot at first like: _'how do I reduce a list again?'_

Thankfully ChatGPT4 has made those beginning steps incredibly easy for me. I just prompt it to reply just like an experienced elixir developer would and give me hints on how to make my code more idiomatic and readable.

## **What it's been like so far**

### Loving Leniency

Programming in Elixir reminds me a bit of Javascript. No types are needed - you can provide some though if you want to and I do enjoy this **opt-in** approach.

If you ever worked in a typescript project that does not allow any (haha get it..) `any` types, you too probably have typed out some insane library function to make your project compile.

And (at least in visual studio code) I get those nifty type inferences... ![elixir_spec](/assets/blog/sippingsomeelixir/elixir_spec.png)

that I can add to the actual code by simply clicking on it. Elixir get's them somewhat right, most of the times.

### Doc-Driven-Development with docgen

So I engineer software for a living and as any developer should, I highly value documentation. And as any self respecting developer does, I properly document my code all the time.

Well - often [^sometimes].

Writing JSDoc is already a step up from just commenting your functions but Elixir goes a step further and let's you generate tests automatically from your code annotations. That is actually ingenious, I love it!

So now I can enjoy doing TDD and write some documentation for my functions at the same time:

```elixir
@doc """
Count's all the differences in two lists.
Order matters!

## Examples
    iex> EnumHelper.count_diffs([1, 2], [1, 2])
    0

    iex> EnumHelper.count_diffs(['a', 'b'], ['a'])
    1

    iex> EnumHelper.count_diffs([1, 2], [2, 1])
    2
"""
def count_diffs(list1, list2) do
..
```

Elixir takes the examples provided in the @doc annotation and turns each of them into an automatically run test.

All you need to do now is call the `doctest` method in your test like so:

```elixir
defmodule EnumHelperTest do
  use ExUnit.Case
  doctest(EnumHelper)
end
```

And that's it, it will run all the examples in your docs as actual tests!

### Interactivity

You might have noticed the `iex` in front of the examples in the doc, it stands for the interactive elixir REPL.
At this point REPLs are not a novel feature - but still a welcome one.

It's always comfortable to call up a function and verify your assumptions on how it supposedly worked.

### Is it you, Mario?

Well this joke is a bit far fetched [^pipes].
Elixir has those **pipe operators** to pass the output of one function to the input of another one:

```elixir
[1, 2, 3]
|> Enum.map(&(&1 * 2)) # the list above get's passed into the map as the first parameter 
|> Enum.sum() # the result of the map get's passed to the sum function 
# => evaluates to 12
```

It's a rather concise and readable way of structuring code.

### Confusing Captivity

It's not all sunshine and roses though.
One thing that is still confusing me is the `&` symbol, also known as the **capture** operator.

It can be used to write an anonymous function as seen in the pipe example above:

```elixir
double = &(&1 * 2)
```

The `&1` stands for the first argument passed into this function. Yet another way of using the capture operator.

Let's say we want to use a function reference in a map function. You've guessed it - it's the capture operater yet again:

```elixir
Enum.map(["a", "b", "c"], &String.upcase/1) # it references the upcase method with 1 parameter
```

It's one of the things I keep stumbling over.

That's fine though.

I ❤ stumbling.

[^monads]: [A monad is a monoid in the category of endofunctors, what's the problem?](https://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html)
[^ai]: Hopefully our AI overlords will forgive this insolence in the future.
[^sometimes]: Okay, maybe sometimes.
[^pipes]: Mario is a plumber and there are pipes right. Hilarious, I know!
