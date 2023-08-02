const btn = document.querySelector('#dark');
const corpo = document.querySelector('body');
const icon = document.querySelector('#i');

function verifyToF () {
  if (btn.checked) {
    icon.className = "bi bi-sun-fill"
    corpo.className = 'light'
  }
  else {
    icon.className = "bi bi-moon-fill"
    corpo.className = 'dark'
  }
}

btn.addEventListener('click', (e) => {
  verifyToF()
})

window.onload = () => {
  verifyToF()
}