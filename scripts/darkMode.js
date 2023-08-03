const btn = document.querySelector('#dark');
const corpo = document.querySelector('body');
const icon = document.querySelector('#i');
const main = document.querySelector('main')

function verifyToF () {
  if (btn.checked) {
    icon.className = "bi bi-sun-fill"
    corpo.className = 'light'
    main.style.cssText -= 'animation: goToRight 1.5s forwards'
  }
  else {
    icon.className = "bi bi-moon-fill"
    corpo.className = 'dark'
    main.style.cssText += 'animation: goToRight 1.5s forwards'
  }
}

btn.addEventListener('click', (e) => {
  verifyToF()
})

window.onload = () => {
  verifyToF()
}