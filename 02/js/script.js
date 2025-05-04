function changeTextColor() {
  let texto = document.getElementById('saida');
  if (texto instanceof HTMLParagraphElement) {
    let cor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    texto.style.color = cor;
  }
}

function random(numero) {
  return Math.floor(Math.random() * (numero + 1));
}
