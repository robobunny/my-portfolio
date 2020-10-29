---
type: "blogPost"
isDraft: false
path: "/tdd-first-test"
date: "2020-10-30 17:00"
title: "Writing a React App using TDD"
tags: ['TDD','reactjs','Jest','extreme TDD']
excerpt: "Let's see if I can write a React App without ever opening the browser!"
---
# My first test

Create react app is the best way to get the wheels turning on a new app. Since I'm not trying to torture myself here (other than by writing a React app using tests alone and without ever opening the app in my browser) I'll go ahead and fire it up:

```js
npx create-react-app
```

## The testing tools for a React app

Now CRA just so happens to spin up a boilerplate app with all the tools I'll need for this job. Namely: 

- React (obviously)
- Jest (the test runner)
- react-test-library (a test library by the React team)

The latter two (Jest and RTL) are not to be confused with one another. Both are necessary. Jest is the test *runner* that will find all my tests and actually execute them and then output various feedback data to the terminal once they've run. RTL is a test *library* that extends the functionality of Jest with a few fancy, react-specific tools. The relevant differences (and tons of other info) are explained very well in [this awesome blog post](https://www.robinwieruch.de/react-testing-library).

## My app's first test

So to start off I gutted the boilerplate of my `App.js` and my `App.test.js` so they looked like so:

**App.js**

```js
import React from 'react';
import blockC from '../src/img/block-c.png';
import './App.css';

const App = () => (

)

export default App;
```

**App.test.js**

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', ()=>{
  test('', () => {

  });
});
```

## Red, Green, Refactor

### Red

Step one was to write a test that describes what I want to make. For my Cleveland Indians memory game, I'll start off easy and just have the App render an image with the alt-text "Cleveland Indians Block C logo". So my first test will use RTL's `getByAltText()` method to check for it.

**App.test.js**

```js
//...

describe('App', ()=>{
  test('renders block C', () => {
    render(<App />);
    const image = screen.getByAltText('Cleveland Indians Block C logo');
    expect(image).toBeInTheDocument();
  });
});
```
The first thing this test does is call RTL's `render()` method to render the `<App />` component. Within the HTML output by that call, the second step grabs the element with alt text "Cleveland Indians Block C logo". The assertion is that this element should be in the document, once again through a method provided by RTL. 

This is all pretty straightforward. And, if I run the test, I see that it fails! Perfect. The first step of TDD is complete.

### Green

Now I have to write some code to make this test pass. It's not rocket science:

**App.js**

```js
//..

const App = () => (
  <div>
    <img src={blockC} alt="Cleveland Indians Block C logo" />
  </div>
)
```
And I run the test again and I see that it passes! Perfect. I'm off to a brilliant start. Next I'll start building the game logic.

Come along for the ride!