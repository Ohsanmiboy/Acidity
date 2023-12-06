const quotes = [
  {
    quote:
      "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
    author: "Romans 8:28",
  },
  {
    quote:
      "So God created man in his own image, in the image of God created he him; male and female created he them",
    author: "gen 1:27",
  },
  {
    quote:
      "3. And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.",
    author: "gen 1:28",
  },
  {
    quote:
      "Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.",
    author: "John 14:6",
  },
  {
    quote:
      "Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit of life set me free",
    author: "Romans 8:1-2",
  },
  {
    quote:
      "He who does what is sinful is of the devil, because the devil has been sinning from the beginning. The reason the Son of God appeared was to destroy the devil's work.",
    author: "1 John 3:8",
  },
  {
    quote: "The Lord is my shepherd, I lack nothing.",
    author: "psalm 23:1",
  },
  {
    quote:
      "She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins.",
    author: "Matthew 1:21",
  },
  {
    quote:
      "Simon Peter answered, “You are the Christ, the Son of the living God.”",
    author: "Matthew 16:16",
  },
  {
    quote:
      "In the beginning was the Word, and the Word was with God, and the Word was God.",
    author: "John 1:1",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
