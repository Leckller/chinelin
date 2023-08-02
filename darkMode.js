const btn = document.querySelector('#dark');
const corpo = document.querySelector('body');
const icon = document.querySelector('#i');

function verifyToF () {
  if (btn.checked) {
    icon.className = "bi bi-sun-fill"
    corpo.style.background = '#eaeaea'
  }
  else {
    icon.className = "bi bi-moon-fill"
    corpo.style.background = '#222'
  }
}

btn.addEventListener('click', (e) => {
  verifyToF()
})

window.onload = () => {
  verifyToF()
}