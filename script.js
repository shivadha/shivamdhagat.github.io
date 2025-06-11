document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate Progress Bars on Hover
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const progress = item.querySelector('.progress');
    const width = progress.getAttribute('data-width');
    progress.style.width = width;
  });
  item.addEventListener('mouseleave', () => {
    const progress = item.querySelector('.progress');
    progress.style.width = '0%';
  });
});

// Project Modals
const modals = document.querySelectorAll('.modal');
const projectButtons = document.querySelectorAll('.project-btn');
const closeButtons = document.querySelectorAll('.close');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Particle Effect on Scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = st / maxScroll;

  if (particlesInstance) {
    const particles = particlesInstance.then(p => {
      const options = p.options;
      const lineLinked = options.particles.line_linked;
      lineLinked.opacity = 0.3 + (scrollFraction * 0.4); // Increase opacity from 0.3 to 0.7
      lineLinked.distance = 100 + (scrollFraction * 50); // Increase distance from 100 to 150
    });
  }

  lastScrollTop = st <= 0 ? 0 : st;
});
function changeLang(lang) {
  const messages = {
    en: "Oi! Language changed, but your coding bugs remain the same 😜",
    de: "Achtung! Jetzt sprichst du Deutsch, aber dein Code weint noch. 🧑‍💻",
    fr: "Ooh là là! Tu parles français maintenant... mais ton JS a peur. 🐸",
    es: "¡Hola! Has cambiado el idioma, pero los errores siguen. 😂"
  };

  const msg = messages[lang] || "Language switched! But the bugs are still multilingual.";
  const msgBox = document.getElementById("lang-message");

  msgBox.innerText = msg;
  msgBox.style.color = "#ffc107";
  msgBox.style.fontSize = "0.9em";
  msgBox.style.marginTop = "10px";
  msgBox.style.textAlign = "center";

  // Confetti effect
  fireConfetti();

  // Reset message after a few seconds
  setTimeout(() => {
    msgBox.innerText = "";
  }, 4000);

  // Apply fake language switch (you can extend this to real i18n later)
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.innerText = el.getAttribute('data-' + lang);
  });
}

function fireConfetti() {
  // Full screen burst
  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 }
  });
}
