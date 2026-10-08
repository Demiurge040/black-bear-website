const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#contactForm');
const status = document.querySelector('#formStatus');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Black Bear website enquiry — ${data.get('service')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nArea of interest: ${data.get('service')}\n\nMessage:\n${data.get('message')}`
    );
    // Replace this placeholder with the agency's real inbox before publishing.
    const recipient = 'contact@blackbear-security.com';
    if (status) status.textContent = 'Opening your email application. If it does not open, email contact@blackbear-security.com directly.';
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
