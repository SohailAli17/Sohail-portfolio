document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  if (document.getElementById('wave-animation')) {
    lottie.loadAnimation({
      container: document.getElementById('wave-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/lottie/wave.json'
    });
  }
  
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  const typewriterText = document.getElementById('typewriter-text');
  const quotes = [
    '"try { buildAwesome(); } catch(e) { debug(e); } – Always shipping, never slipping."',
    '"if (idea) build(); else dream();"',
    '"error404: limits not found;✨"',
    '"function build() { return awesome && aesthetic; }"'

  ];
  
  let quoteIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 95;
  
  function typeWriter() {
    const currentQuote = quotes[quoteIndex];
    
    if (!isDeleting && charIndex <= currentQuote.length) {
      typewriterText.textContent = currentQuote.substring(0, charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      typewriterText.textContent = currentQuote.substring(0, charIndex);
      charIndex--;
      setTimeout(typeWriter, typingSpeed / 2);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) quoteIndex = (quoteIndex + 1) % quotes.length;
      setTimeout(typeWriter, isDeleting ? typingSpeed * 3 : typingSpeed);
    }
  }
  
  typeWriter();
});