---
hasOwnPage: true
number: 1
title: "Weather App"
summary: "Weather App made with Node.js"
path: "/weather-app"
img: "weather-app.png"
---
[Check out the app!](https://robobunny-weather-app.herokuapp.com)

[Check out the source code!](https://www.github.com/robobunny/weather-app)

This is a simple weather app. It encodes the location and returns the weather for that location.

## What I learned

### Node.js

The backend of this app is written in Javascript with extensive use of Express.js to build the routes for the API. The app fetches and destructures JSON from two open APIs, one to encode the location and the other to fetch the weather data.

### Heroku

Deploying the app through Heroku was a little bit of a challenge because it is important to have the ports and environment variables right so that the app works the same way in production as it does in development. I learned a lot about the way that a server communicates with a client.

Because the app is hardly ever used, it loads very slowly when you first hit the heroku server. This has to do with the fact that Heroku spins the server back down after a certain amount of time and therefore has to spin it up anew upon the first visit after a while.

## What I could improve

### Input data validation

There is some error handling but vague inputs could easily lead to incorrect outputs. A production app should sanitize and validate data on both the front end and the back end. Deploying the app with heroku comes with some security benefits, and having an app that is absolutely meaningless helps reduce risk of a major security breach.

### Clean code

Better semantic (e.g. variable and function naming) and code splitting would increase maintainability


This project taught me a lot about building an API and how clients and servers communicate. I can't wait to get into something a bit more advanced!