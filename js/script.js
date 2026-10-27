// Menu filter buttons
const buttons = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.item');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const choice = btn.dataset.filter;
    items.forEach(item => {
      item.classList.toggle('hide', choice !== 'all' && item.dataset.cat !== choice);
    });
  });
});

// Booking form check (stops the form if something is missing)
const form = document.getElementById('bookForm');
const error = document.getElementById('formError');
form.addEventListener('submit', e => {
  const date = form.elements['date'].value;
  const today = new Date().toISOString().split('T')[0];
  if (!form.elements['name'].value.trim() || !form.elements['email'].value.includes('@')) {
    e.preventDefault();
    error.textContent = 'Please enter your name and a valid email address.';
  } else if (!date || date < today) {
    e.preventDefault();
    error.textContent = 'Please choose today or a future date.';
  } else {
    error.textContent = '';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
