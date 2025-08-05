document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, you would send the form data to a server here
      // For this example, we'll just show the success message
      
      // Hide form and show success message
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
      
      // Reset form after 5 seconds (for demo purposes)
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.style.display = 'none';
      }, 5000);
    });
  }
  
  // GSAP animations
  gsap.from('.contact-info', {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power3.out"
  });
  
  gsap.from('.contact-form', {
    duration: 1,
    x: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3
  });
});