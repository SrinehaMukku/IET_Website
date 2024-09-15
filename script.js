// Scroll effect for navbar
// Add scroll event listener
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var socialMediaBarHeight = document.querySelector('.social-media-bar').offsetHeight;
  
    // If the user scrolls past the social media bar
    if (window.scrollY > socialMediaBarHeight) {
      navbar.classList.add('fixed'); // Make the navbar fixed at the top
    } else {
      navbar.classList.remove('fixed'); // Return to normal flow when scrolled up
    }
  });
  
// Form validation and submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name && email && message) {
        alert('Message sent successfully!');
        form.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
