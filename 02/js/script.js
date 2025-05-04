function changeTextColor() {
  let texto = document.getElementById('saida');
  if (texto instanceof HTMLParagraphElement) {
    let randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    texto.style.color = randomColor;
  }
}

function random(numero) {
  return Math.floor(Math.random() * (numero + 1));
}
