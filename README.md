# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

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

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links

- Solution URL: [Frontend Mentor Solution](https://your-solution-url.com)
- Live Site URL: [Live Site](https://url-shortening-api-sable.vercel.app/)

## My process
I actually started off without any CSS, no aesthetics. Setting up my file system depending on the problem and building myself on top of that. I did the HTML and Javascript first, made sure all the functionalities are working fine. After the project was fully functional without CSS, I then refactored my code to be more readable before adding CSS with a desktop-first approach.

### Built with

- ReactJs
- Typescript
- HTML
- CSS
- React Functional Components with Hooks
- Axios

### What I learned

I increased my knowledge and experience on API calls and JSON manipulations. I consumed the Shorten API and managed to change the views on the site using react states and hooks. I also learnt how to follow a premade design to the letter to the very pixel perfect relults anticipated.

I finally understood how to persist the states on site reload using `localStorage`. Before, I had managed to store the data in the `localStorage`, only to reset it on browser refresh. Turned out that I was reseting the data during initialization. To solve this, according to an answer in stack overflow, use another variable to initiate the state, and parse it as the state default value.

```
// Instead of this...

// you're creating a state variable with an empty array
   const [shortUrlList, setShortUrlList] = useState<ShortUrlListObj[]>([])

// Do this...

// @ts-ignore
  const storeShortUrlList = JSON.parse(localStorage.getItem("shortUrlList") || [])
  // @ts-ignore
  const [shortUrlList, setShortUrlList] = useState<ShortUrlListObj[]>(storeShortUrlList) 

  // Not yet found a better solution to remove the @ts-ignore though...
```

### Continued development

I loved using Typescript. This is the first time to actually use it in a project, but it was definately worth a shot. I will use it in almost all my future projects going forward.

### Useful resources

- [Stackoverflow answer on state persist](https://stackoverflow.com/questions/64903227/local-storage-keeps-resetting-on-page-reload) - This helped me to finally somlve a bug on state persisting that will definately employ on my future projects

## Author

- Website - [steentoons](https://vercel.com/steentoons/portfolio)
- Frontend Mentor - [@steentoons](https://www.frontendmentor.io/profile/steentoons)
- Linkedin - [@steentoons](https://www.linkedin.com/in/steen-toons/)

