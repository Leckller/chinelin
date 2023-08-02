const btn = document.querySelector('#dark');
const corpo = document.querySelector('body');
const icon = document.querySelector('#i');

btn.addEventListener('click', (e) => {
  if (btn.checked) icon.className = "bi bi-moon-fill"
  else icon.className = "bi bi-sun-fill"
})