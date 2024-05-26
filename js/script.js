// Change background color button
document
  .getElementById("changeColorButton")
  .addEventListener("click", function () {
    // Generate a random hex color code
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    // Apply the color to the body background
    document.body.style.backgroundColor = randomColor;
  });

document.addEventListener("DOMContentLoaded", function () {
  // Slideshow for the photo gallery
  const photos = document.querySelectorAll(".photos img");
  let currentIndex = 0;

  function showPhoto(index) {
    photos.forEach((photo, i) => {
      photo.style.display = i === index ? "block" : "none";
    });
  }

  function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto(currentIndex);
  }

  function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto(currentIndex);
  }

  // Set up event listeners for directional buttons
  document.getElementById("prevButton").addEventListener("click", prevPhoto);
  document.getElementById("nextButton").addEventListener("click", nextPhoto);

  // Set up interval for automatic slideshow
  setInterval(nextPhoto, 3000); // Change photo every 3 seconds

  // Toggle between light and dark mode
  const toggleModeButton = document.getElementById("toggleModeButton");
  const body = document.body;

  toggleModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    // Store user preference in local storage
    localStorage.setItem(
      "mode",
      body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });

  // Check if user has previously selected dark mode
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    body.classList.add("dark-mode");
  }

  // Interactive Photo Gallery
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  const span = document.querySelector(".close");

  photos.forEach(function (photo) {
    photo.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      currentIndex = Array.from(photos).indexOf(this);
    });
  });

  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Navigate gallery with arrow keys
  document.addEventListener("keydown", function (event) {
    if (modal.style.display === "block") {
      if (event.key === "ArrowLeft") {
        prevPhoto();
      } else if (event.key === "ArrowRight") {
        nextPhoto();
      }
    }
  });

  // Dynamic Quotes
  const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The way to get started is to quit talking and begin doing.",
    "Don't watch the clock; do what it does. Keep going.",
  ];

  const quoteDisplay = document.querySelector(".quote blockquote");
  let quoteIndex = 0;

  function displayNextQuote() {
    quoteDisplay.textContent = '"' + quotes[quoteIndex] + '"';
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }

  // Display initial quote
  displayNextQuote();

  // Change quote on button click
  document
    .getElementById("changeQuoteButton")
    .addEventListener("click", displayNextQuote);
});
