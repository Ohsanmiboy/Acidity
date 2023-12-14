const images = ["bbbbback1.jpg", "bbbbback2.jpg", "bbbbback3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#bg");

bgImage.style.backgroundImage = `url(img/${chosenImage})`;
