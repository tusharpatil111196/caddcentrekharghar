(() => {
  const nav = document.getElementById('navbar');
  const toggle = nav?.querySelector('.nav-toggle');
  const menu = nav?.querySelector('.nav-links');

  if (!nav || !toggle || !menu) return;

  const closeMenu = () => {
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    nav.classList.toggle('menu-open', !isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1170) closeMenu();
  });
})();
