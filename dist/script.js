document.querySelector('#signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  const note = document.querySelector('#form-note');
  note.textContent = `Thank you. We'll write to ${input.value} when the next essay is ready.`;
  event.currentTarget.reset();
});
