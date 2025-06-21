// Design system (from inf.json)
const design = {
  theme: {
    mode: "dark",
    colors: {
      background: "#000000",
      textPrimary: "#FFFFFF",
      textSecondary: "#CCCCCC",
      accent: "#00A8FF",
      overlay: "rgba(0, 0, 0, 0.6)"
    },
    fonts: {
      heading: "'PP Neue Montreal', sans-serif",
      body: "'PP Formula', sans-serif"
    }
  },
  layout: {
    maxWidth: "1200px",
    padding: "40px",
    sectionsGap: "80px",
    gridColumns: 12
  },
  typography: {
    heading: {
      size: "4rem",
      weight: 700,
      lineHeight: 1.2
    },
    subheading: {
      size: "2rem",
      weight: 500
    },
    body: {
      size: "1rem",
      weight: 400,
      color: "#CCCCCC"
    }
  },
  components: {
    navbar: {
      position: "fixed",
      top: 0,
      bgColor: "rgba(0,0,0,0.8)",
      linkColor: "#FFFFFF",
      linkHoverColor: "#00A8FF"
    }
  },
  animations: {
    scrollReveal: "fade-up",
    hoverTransition: "transform .3s ease",
    btnHover: "background .3s ease"
  },
  extras: {
    cursor: "custom light circle",
    smoothScroll: true
  }
};

// Navbar
const navbar = document.getElementById('navbar');
navbar.innerHTML = `
  <a href="#hero">Home</a>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#work">Work</a>
  <a href="#contact">Contact</a>
`;

// Custom cursor (light circle)
(function customCursor() {
  const cursor = document.createElement('div');
  cursor.style.position = 'fixed';
  cursor.style.width = '32px';
  cursor.style.height = '32px';
  cursor.style.border = '2px solid #fff';
  cursor.style.borderRadius = '50%';
  cursor.style.pointerEvents = 'none';
  cursor.style.zIndex = '9999';
  cursor.style.transition = 'transform .15s cubic-bezier(.4,2,.6,1), opacity .2s';
  cursor.style.mixBlendMode = 'difference';
  cursor.style.opacity = '0.7';
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 16 + 'px';
    cursor.style.top = e.clientY - 16 + 'px';
  });
  // Cursor hover effect
  for (const sel of ['a', 'button', '.cta']) {
    document.addEventListener('mouseover', e => {
      if (e.target.matches(sel)) {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.opacity = '1';
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.matches(sel)) {
        cursor.style.transform = 'scale(1)';
        cursor.style.opacity = '0.7';
      }
    });
  }
})();
// Smooth scroll
if (design.extras.smoothScroll) {
  document.documentElement.style.scrollBehavior = 'smooth';
}

// Scroll reveal animation for all sections except hero
function revealOnScroll() {
  const reveals = document.querySelectorAll('main section:not(#hero)');
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 195; // Trigger when 195px from bottom
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  setTimeout(revealOnScroll, 100); // Ensure after layout
}); 