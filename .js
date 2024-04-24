// This is an example of how to add a click event listener to a menu item
// You can add more JavaScript code to add functionality to your website

const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Add your own functionality here, such as smooth scrolling to the clicked section
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const viewMoreButtons = document.querySelectorAll('.benefit-item button');

  viewMoreButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          alert('More information coming soon!');
      });
    });
});
