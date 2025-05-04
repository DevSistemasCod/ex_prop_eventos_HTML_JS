function destacarLinha() {
  let linha = document.getElementById('conteudoDiv');

  if (linha instanceof HTMLDivElement) {
    linha.style.backgroundColor ='rgb(255, 247, 3)';
    linha.textContent = 'Você passou o mouse!';
  }
}

function limparLinha() {
  let linha = document.getElementById('conteudoDiv');
  if (linha instanceof HTMLDivElement) {
    linha.style.backgroundColor ='rgb(255, 255, 255)';
    linha.textContent = 'Passe o mouse aqui!';
  }
}
