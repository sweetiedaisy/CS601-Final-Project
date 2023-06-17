document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('backToTopButton');
  
    // Function to scroll to the top of the page smoothly
    function scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  
    // Show or hide the back-to-top button based on scroll position
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('show');
        } else {
          backToTopButton.classList.remove('show');
        }
      }      
  
    // Scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToTop();
    });
  
    // Show or hide the button on scroll
    window.addEventListener('scroll', function() {
      toggleBackToTopButton();
    });
  
    // Initialize the button state
    toggleBackToTopButton();
  });
  