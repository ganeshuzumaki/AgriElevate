// ================================
// Contact Form Validation
// ================================
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    this.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "⚠️ Please fill in all fields.";
  }
});


// ================================
// Smooth Scroll for Navigation Links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ================================
// Scroll Animation for Sections
// ================================
const sections = document.querySelectorAll('section');
const options = { threshold: 0.2 };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add('opacity-zero'); // start hidden
  observer.observe(section);
});

// ================================
// Optional: Sticky Header Shadow
// ================================
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if(window.scrollY > 50) {
    header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  } else {
    header.style.boxShadow = 'none';
  }
});
