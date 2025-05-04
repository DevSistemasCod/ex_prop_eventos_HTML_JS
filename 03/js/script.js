// Seleciona o elemento p pelo Id
let texto = document.getElementById('texto');

if (texto instanceof HTMLParagraphElement) {
  // Define o evento onmousedown diretamente no elemento
  texto.onmousedown = () => {
    if (texto instanceof HTMLParagraphElement) {
      texto.style.color = 'red'; // Altera a cor do texto para vermelho ao pressionar o mouse
    }
  };
  // Restaura a cor original quando o botão do mouse é liberado
  texto.onmouseup = () => {
    if (texto instanceof HTMLParagraphElement) {
      texto.style.color = 'black';
    }
  };
}
