 //Particle JS Init 
 tsParticles.load("tsparticles", {
      background: { color: "#0e0e0e" },
      fpsLimit: 60,
      particles: {
        color: { value: "#00ffea" },
        links: { enable: true, color: "#00ffea", distance: 150 },
        collisions: { enable: false },
        move: { enable: true, speed: 1, direction: "none", outModes: "bounce" },
        number: { value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } }
      },
      detectRetina: true
    });
const select = document.getElementById('category-select');
const projectCards = document.querySelectorAll('.projects .card');
const noProjects = document.getElementById('no-projects');

select.addEventListener('change', () => {
  const filterValue = select.value.toLowerCase();
  let anyVisible = false;

  projectCards.forEach(card => {
    // Get all categories of the project as an array
    const categories = card.getAttribute('data-category').toLowerCase().split(' ');

    if (filterValue === 'all' || categories.includes(filterValue)) {
      card.style.display = 'block';
      anyVisible = true;
    } else {
      card.style.display = 'none';
    }
  });

  // Show "No projects found" if nothing matches
  noProjects.style.display = anyVisible ? 'none' : 'block';
});

document.getElementById("current-year").textContent = new Date().getFullYear();