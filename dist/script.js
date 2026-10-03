const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close ×' : 'Menu +';
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.story').forEach((story) => {
      story.hidden = button.dataset.filter !== 'all' && story.dataset.category !== button.dataset.filter;
    });
  });
});

document.querySelector('#signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  const note = document.querySelector('#form-note');
  note.textContent = `Signal found for ${input.value}. Newsletter delivery is coming next.`;
  event.currentTarget.reset();
});
