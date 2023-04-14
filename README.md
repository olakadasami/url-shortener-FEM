# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  <!-- - [Useful resources](#useful-resources) -->
- [Author](#author)
<!-- - [Acknowledgments](#acknowledgments) -->

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [My solution](https://github.com/olakadasami/url-shortener-FEM.git)
- Live Site URL: [My live site](https://fem-url-shortener-olakadasami.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to use the navigator, to copy text to the clipboard
```js
  navigator.clipboard.writeText(content)
```

Its also my first time querying an external API with vanilla JS
```js
const shortenLink = async (link) => {
  const apiLink = `https://api.shrtco.de/v2/shorten?url=${link}`

  const res = await fetch(apiLink)
  return await res.json()
}
```


### Continued development

I will continue developing my vanilla JavaScript skills, If i can solve problems using vanilla JS, I'm sure it'll be easier using a library or framework


<!-- ### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept. -->

## Author

- Website - [Samuel Olakada](https://olakadasami-portfolio.vercel.app/)
- Frontend Mentor - [@olakadasami](https://www.frontendmentor.io/profile/olakadasami)
- Twitter - [@olaks_codes](https://www.twitter.com/olaks_codes)
