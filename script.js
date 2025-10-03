console.log("script.js loaded");

// Inject CSS keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
  /* Scale-in animation for landing page */
  @keyframes scaleIn {
    0% { transform: scale(0.7); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  /* Slide-in from left for jelajahi-desa */
  @keyframes slideInLeft {
    0% { transform: translateX(-200px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }

  /* Slide-in from right for sambutan */
  @keyframes slideInRight {
    0% { transform: translateX(200px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }

  /* Bounce-in for peta */
  @keyframes bounceIn {
    0% { transform: translateY(100px); opacity: 0; }
    60% { transform: translateY(-30px); opacity: 0.7; }
    100% { transform: translateY(0); opacity: 1; }
  }

  /* Rotate-in for sotk */
  @keyframes rotateIn {
    0% { transform: rotate(-15deg) scale(0.7); opacity: 0; }
    100% { transform: rotate(0) scale(1); opacity: 1; }
  }

  /* Fade-in with scale for penduduk */
  @keyframes fadeInScale {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  /* Slide-up for berita */
  @keyframes slideUp {
    0% { transform: translateY(150px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  /* Pop-in for galeri */
  @keyframes popIn {
    0% { transform: scale(0.4); opacity: 0; }
    80% { transform: scale(1.2); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }

  /* Slide-in from bottom for footer */
  @keyframes slideInBottom {
    0% { transform: translateY(100px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  /* Classes to apply animations */
  .animate-scale-in { animation: scaleIn 1s ease-out forwards; }
  .animate-slide-in-left { animation: slideInLeft 1s ease-out forwards; }
  .animate-slide-in-right { animation: slideInRight 1s ease-out forwards; }
  .animate-bounce-in { animation: bounceIn 1s ease-out forwards; }
  .animate-rotate-in { animation: rotateIn 1s ease-out forwards; }
  .animate-fade-in-scale { animation: fadeInScale 1s ease-out forwards; }
  .animate-slide-up { animation: slideUp 1s ease-out forwards; }
  .animate-pop-in { animation: popIn 1s ease-out forwards; }
  .animate-slide-in-bottom { animation: slideInBottom 1s ease-out forwards; }
`;
document.head.appendChild(styleSheet);

// New animations for each section
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      // Apply specific animation based on section ID or class
      if (section.id === 'home') {
        section.classList.add('animate-scale-in');
      } else if (section.classList.contains('jelajahi-desa')) {
        section.classList.add('animate-slide-in-left');
      } else if (section.classList.contains('sambutan')) {
        section.classList.add('animate-slide-in-right');
      } else if (section.id === 'peta') {
        section.classList.add('animate-bounce-in');
      } else if (section.id === 'sotk') {
        section.classList.add('animate-rotate-in');
      } else if (section.id === 'penduduk') {
        section.classList.add('animate-fade-in-scale');
      } else if (section.id === 'berita') {
        section.classList.add('animate-slide-up');
      } else if (section.id === 'galeri') {
        section.classList.add('animate-pop-in');
      } else if (section.id === 'kontak') {
        section.classList.add('animate-slide-in-bottom');
      }
      animObserver.unobserve(section); // Stop observing after animation
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the section is visible
});

// Observe all sections for new animations
document.querySelectorAll('section, footer').forEach(section => {
  animObserver.observe(section);
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;
  const offset = -currentSlide * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.next-btn').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Auto slide every 7 seconds (increased from 5 seconds for slower animation)
setInterval(() => {
  showSlide(currentSlide + 1);
}, 7000);

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

