document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize 3D project tiles
  const projectTiles = document.querySelectorAll('.project-tile');
  
  projectTiles.forEach(tile => {
    // Add click event for mobile (since hover doesn't work well)
    tile.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        this.classList.toggle('flipped');
      }
    });
    
    // For desktop, show details when clicked
    tile.addEventListener('click', function(e) {
      if (window.innerWidth > 768) {
        e.preventDefault();
        const projectId = this.id;
        showProjectDetails(projectId);
      }
    });
  });
  
  // Show project details
  function showProjectDetails(projectId) {
    // Hide all details first
    document.querySelectorAll('.project-details').forEach(detail => {
      detail.classList.remove('active');
    });
    
    // Show the selected project details
    const detailsElement = document.getElementById(`${projectId}-details`);
    if (detailsElement) {
      detailsElement.classList.add('active');
      
      // Scroll to details
      detailsElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  // Initialize with first project visible
  if (projectTiles.length > 0) {
    showProjectDetails(projectTiles[0].id);
  }
  
  // GSAP animations for project tiles
  gsap.from('.project-tile', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });
  
  // Parallax effect for 3D container
  const container = document.querySelector('.projects-3d-container');
  if (container) {
    container.addEventListener('mousemove', (e) => {
      if (window.innerWidth > 992) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        document.querySelector('.projects-3d').style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    });
    
    // Reset when mouse leaves
    container.addEventListener('mouseleave', () => {
      document.querySelector('.projects-3d').style.transform = 'rotateY(0) rotateX(0)';
    });
  }
});