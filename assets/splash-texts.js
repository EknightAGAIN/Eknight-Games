const phrases = [
    "Emir is better.",
    "Kasen needs math help",
    "Wisd is not nice.",
    "declan is a math seat",
    "Emir is just better.",
    "Do your homework.",
    "Fun math games.",
  ];

  function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
  }
