const menu = document.querySelector('.menu-button');
const panel = document.querySelector('.nav-panel');

if (menu && panel) {
  const closeMenu = () => {
    panel.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  };

  menu.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('open')) {
      closeMenu();
      menu.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!panel.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
}
