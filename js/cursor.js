// Get references to the cursor and cursor trail elements
let cursor = document.getElementById("cursor");
let cursorTrail = document.getElementById("cursor-trail");
// Get all interactive elements (links and buttons) to add hover effects
let hoverElements = document.querySelectorAll("a, button");
// Initialize variables to store mouse and trail positions
let mx = 0;
let my = 0;
let tx = 0;
let ty = 0;

// Add an event listener to track mouse movement
document.addEventListener("mousemove", function (e) {
  // Update the mouse position variables
  mx = e.clientX;
  my = e.clientY;
  // Update the position of the cursor element
  cursor.style.left = mx - 6 + "px";
  cursor.style.top = my - 6 + "px";
});

function animateTrail() {
  // Smoothly move the trail towards the mouse position
  tx += (mx - tx) * 0.1;
  ty += (my - ty) * 0.1;
  // Update the position of the cursor trail element
  cursorTrail.style.left = tx - 18 + "px";
  cursorTrail.style.top = ty - 18 + "px";
  // Continue the animation loop
  requestAnimationFrame(animateTrail);
}

document.addEventListener("mouseenter", function () {
  // Scale up the cursor when the mouse enters the document
  cursor.style.transform = "scale(2.5)";
});

document.addEventListener("mouseleave", function () {
  // Scale down the cursor when the mouse leaves the document
  cursor.style.transform = "scale(1)";
});

// Start the animation loop for the cursor trail
animateTrail();
