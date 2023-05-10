// Get the hamburger button and navigation menu
const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');

// When the hamburger button is clicked, toggle the "active" class on both the button and navigation menu
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Get all the "read more" buttons
const readMoreBtns = document.querySelectorAll('.read-more');

// Loop through each "read more" button and add a click event listener to toggle the "show" class on the associated text
readMoreBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const text = btn.previousElementSibling;
    text.classList.toggle('show');
  });
});
