# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - 3-column preview card component solution](#frontend-mentor---3-column-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

This is my third completed challenge for Frontend Mentor. I do these challenges as a way to solidify and enhance my front-end development skills, and as an opportunity to learn more about React, CSS, and accessibility best-practices.

For these challenges I am given image assets, fonts, font sizes, colors, and JPGs of the final product. I am not given exact dimensions, so I have to guess!
### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/3-column-preview-card-with-react-and-sass-1DkPMifaN)
- Live Site URL: [Live site](https://lenniecottrell.github.io/FM-3column-preview-card/)

## My process
- I always start by thinking about component structure, and then building the HTML/component skeleton.
- Each section of the card was structured the same but had different data, so I decided to move the data to its own file and import it dynamically.
- I always put colored borders around my components at the beginning to help visualize the box model.
- In this challenge I styled the mobile version first. I found this to be helpful and I ended up needing to make fewer changes to the desktop version.
- I added a small transition to the hover states just to make it a little nicer.
### Built with

- [React](https://reactjs.org/) - JS library
- SCSS
- Flexbox
- Mobile-first workflow

### What I learned

1. This project was an excellent reminder of how to use list components in React, and a good warm-up to using JSON data in React components.
2. SVGs, due to their complexity, are needy assets. Using them as part of the data was more complicated than just calling a filepath - I needed to require them as modules and then make sure  my webpack config was set up correctly to render them. See below for the resources I used to solve this issue.

### Continued development

I will definitely keep working on my mobile-first design, and after this I feel like I've done enough refreshing of the basics to start moving on to more complex projects. 

### Useful resources

- [React docs on list components](https://reactjs.org/docs/lists-and-keys.html) - I love the React docs for the most part. They do a good job of explaining and showing clear examples. I used the docs to review how list components work.
- [Loading SVGs via file-loader in Webpack](https://stackoverflow.com/questions/59070216/webpack-file-loader-outputs-object-module) - I had to do some digging to figure out why the SVGs weren't rendering
- [Where is my webpack config file?](https://stackoverflow.com/questions/48395804/where-is-create-react-app-webpack-config-and-files) - Since I had to investigate my Webpack config file, I needed to find it first!

## Author

- Website - [lenniewritescode](https://www.lenniewritescode.com)
- Frontend Mentor - [@lenniecottrell](https://www.frontendmentor.io/profile/lenniecottrell)
- Twitter - [@lenniecottrell](https://www.twitter.com/lenniecottrell)