function inicializar() {
  let quadrado = document.getElementById('quadrado');
  if (quadrado instanceof HTMLDivElement) {
    quadrado.onmouseenter = () => {
      quadrado.style.backgroundColor = 'lightgreen';
      quadrado.textContent = 'Mouse sobre!';
    };

    quadrado.onmouseleave = () => {
      quadrado.style.backgroundColor = 'lightblue';
      quadrado.textContent = 'Passe o mouse aqui!';
    };
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
