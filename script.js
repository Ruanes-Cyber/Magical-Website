// Toggle dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("dropdownContent");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Optional: Hide dropdown if user clicks outside it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  }
};

// Slideshow indexes
let slideIndexes = {
  portrait: 0,
  landscape: 0,
  review: 0
};

// Portfolio (portrait) slider
function movePortrait(n) {
  moveSlider(n, 'portrait');
}

// Portfolio (landscape) slider
function moveLandscape(n) {
  moveSlider(n, 'landscape');
}

// Generic slider handler for portfolio
function moveSlider(n, type) {
  const slider = document.querySelector(`.${type}-slider .slides`);
  const slides = slider.querySelectorAll("img");
  const slidesPerGroup = 3;
  const totalGroups = Math.ceil(slides.length / slidesPerGroup);

  // Move index by group instead of individual slide
  slideIndexes[type] += n;

  if (slideIndexes[type] < 0) {
    slideIndexes[type] = totalGroups - 1;
  } else if (slideIndexes[type] >= totalGroups) {
    slideIndexes[type] = 0;
  }

  const offset = -(slideIndexes[type] * 100); // Each group takes 100% width
  slider.style.transform = `translateX(${offset}%)`;
}

// Start the slideshow

let reviewIndex = 0;

function showReview() {
  const reviews = document.querySelectorAll(".review");

  reviews.forEach((review, i) => {
    review.classList.remove("active"); // Hide all
    if (i === reviewIndex) {
      review.classList.add("active");  // Show current
    }
  });

  // Move to the next review (loop back to 0)
  reviewIndex = (reviewIndex + 1) % reviews.length;
}

// Show the first review immediately
showReview();

// Auto switch every 5 seconds
setInterval(showReview, 7000);