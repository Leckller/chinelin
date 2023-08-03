const fotos = document.getElementsByClassName('f');
const btnMain = document.getElementById('botaoDireitaPhoto');
const centro = document.getElementsByClassName('centerM');
const back = document.getElementsByClassName('backM')

let inicial = 0
function reset() {
  fotos[0].classList.add('centerM')
  inicial = 0
}


btnMain.addEventListener('click', (e) => {
  if (inicial < fotos.length && centro.length != 0) {
    centro[0].classList.add('backM');
    centro[0].classList.remove('centerM');
    inicial += 1;
    if (inicial === fotos.length) {
      inicial = 0
    }
    if (fotos[inicial].className.includes('backM')) {
      fotos[inicial].classList.remove('backM')
    }
    fotos[inicial].classList.add('centerM');
  }
})

window.onload = () => {
  reset()
}

// document.querySelector('main').children[3].style.cssText += 'Animation: corre 1s forwards'