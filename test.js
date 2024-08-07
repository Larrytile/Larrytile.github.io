// Select elements
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const closeMenuBtn = offScreenMenu.querySelector(".close-menu-btn");

// Function to close the off-screen menu
function closeOffScreenMenu() {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
}

// Event listener for hamburger menu button click
hamMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Event listener to close menu when clicking outside the menu area
document.addEventListener("click", (event) => {
  if (!offScreenMenu.contains(event.target) && !hamMenu.contains(event.target)) {
    closeOffScreenMenu();
  }
});

// Event listener to close menu when ESC key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeOffScreenMenu();
  }
});

// Event listener for close button click
closeMenuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  closeOffScreenMenu();
});
