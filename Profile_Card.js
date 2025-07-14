 const images = [
      "images/quote1.webp",
      "images/quote2.jpg",
      "images/quote3.jpg",
      "images/quote4.webp",
      "images/quote5.jpg"
    ];

    const bgColors = [
      "#fcefe6", "#f4f4f9", "#e3f6f5", "#fff7e6", "#f0f4f8", "#e8f0fe", "#f0fff0", "#ffe4e1"
    ];

    function showQoutes() {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      document.getElementById("quoteImage").src = randomImage;

      const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
      document.getElementById("profileBox").style.backgroundColor = randomColor;
    }
