const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

document.querySelectorAll('[data-current-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const email = form.querySelector('input[type="email"]');
    const note = form.querySelector('.form-note');
    if (!email || !note) return;
    if (email.validity.valid) {
      note.textContent = 'Thank you — you are on the Nutlore concept list.';
      email.value = '';
    } else {
      note.textContent = 'Please enter a valid email address.';
    }
  });
});
