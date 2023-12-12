const images = ["hoonman.JPG", "jooditto.jpeg", "seohui.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#bg");

bgImage.style.backgroundImage = `url(img/${chosenImage})`;
