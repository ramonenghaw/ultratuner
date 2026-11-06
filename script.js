const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// GitHub Pages project URL: https://owner.github.io/repository/
const host = location.hostname;
const pathParts = location.pathname.split('/').filter(Boolean);
const owner = host.endsWith('.github.io') ? host.slice(0, -'.github.io'.length) : '';
const repository = pathParts[0] && !pathParts[0].endsWith('.html') ? pathParts[0] : '';
const contact = document.querySelector('#support-contact');
const fallback = document.querySelector('#contact-fallback');
if (owner && repository && contact) {
  contact.href = `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}/issues/new`;
  contact.hidden = false;
  if (fallback) fallback.hidden = true;
}
