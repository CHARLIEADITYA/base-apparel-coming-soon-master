# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./assests/images/127.0.0.1_5501_index.html%20(1).png)
![](./assests/images/127.0.0.1_5501_index.html%20(2).png)
![](./assests/images/127.0.0.1_5501_index.html%20(3).png)

### Links

- Solution URL: [Get solution](https://github.com/CHARLIEADITYA/base-apparel-coming-soon-master.git)
- Live Site URL: [View](https://charlieaditya.github.io/base-apparel-coming-soon-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
Here i learned a email validation throuh js

To see how you can add code snippets, see below:

```js
document.querySelector(".submitBtn").addEventListener("click", () => {
  let emailValue = document.querySelector(".emailInputBox").value;

  var mailPattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (mailPattern.test(emailValue)) {
    document.querySelector(".error").classList.remove("showError");
    // document.querySelector(".errorPara").classList.add("hide");
    document.querySelector(".errorPara").style.display="none"
} else {
    document.querySelector(".error").classList.add("showError");
    // document.querySelector(".errorPara").classList.remove("hide");
    document.querySelector(".errorPara").style.display="block"
  }
});

```

## Author

- Github - [CHARLIEADITYA](https://github.com/CHARLIEADITYA)
- Frontend Mentor - [@CHARLIEADITYA](https://www.frontendmentor.io/profile/CHARLIEADITYA)
- Linkedin - [@adityabaranwal34](https://www.linkedin.com/in/adityabaranwal34/)


