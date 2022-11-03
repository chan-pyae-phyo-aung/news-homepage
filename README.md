# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshots

![Desktop View](<./img/screenshot(desktop-view).png>)
![Desktop View](<./img/screenshot(mobile-view).png>)

### Links

- Solution URL: [My Solution](https://github.com/chanpyaephyoaung/news-homepage)
- Live Site URL: [Live Site](https://chanpyaephyoaung.github.io/news-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox
- Desktop-first workflow
- Vanilla JavaScript

### What I learned

There is no doubt that I've learned several new things by building this homepage alone. Two of the most significant ones are styling the menu toggle using only pure css and `<picture>` tag to specify image resources for certain screen sizes.

To use `<picture>` tag, see below:

```html
<picture>
  <source media="(min-width:600px)" srcset="img_desktop.jpg" />
  <img src="img_mobile.jpg" alt="image" style="width:auto;" />
</picture>
```

### Useful resources

- [The Picture Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [A Complete Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Author

- Website - [News Homepage (Solution) by Chan Pyae](https://chanpyaephyoaung.github.io/news-homepage/)
- Frontend Mentor - [@chanpyaephyoaung](https://www.frontendmentor.io/profile/chanpyaephyoaung)
