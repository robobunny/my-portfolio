---
type: "blogPost"
isDraft: false
path: "/tdd-intro"
date: "2020-10-29 16:00"
title: "Writing a React App using TDD"
tags: ['TDD','reactjs','Jest','extreme TDD']
excerpt: "Let's see if I can write a React App without ever opening the browser!"
---
# Writing an app using Test-driven Development (TDD)

No developer loves to write tests. But every developer should love to have a well-tested codebase. I set out to improve my testing skills by coding a little memory game using the strictest TDD possible: *I won't open the app on a dev server at all.* My goal is to write such good and comprehensive tests that I'm sure my app *just works* without ever trying it out.

That's right. **Armed only with my IDE (VS Code, sorry vim fans) and a terminal, I'm going to create a react app** complete with state, hooks, animations, and user interactions! When I get to the end, we'll see whether I've succeeded (unlikely) or whether I've overlooked something along the way (likely). What's absolutely certain is that I'll learn some stuff along the way.

## My App

The app I'll be making during this adventure is a memory game featuring players from the 1995 Cleveland Indians.

So join me on this fool's errand, won't you?