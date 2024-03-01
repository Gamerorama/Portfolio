function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

//   SCROLL REVEAL
ScrollReveal().reveal('.section__text, .title', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.section__pic-container, .about-details-container, .experience-details-container, .details-container, .contact-info-container, .project-title, .btn-container', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.logo, .hamburger-icon, .icon, .arrow', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.nav-links, .btn-color-1, .btn-color-2, footer', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// TYPED JS
const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'UI/UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});