//event é o parâmetro da função que recebe o objeto de evento passado 
// automaticamente pelo navegador.
// Contém informações sobre o evento "mousemove", como:
// offsetX e offsetY: As coordenadas X e Y do mouse relativas ao elemento 
// que disparou o evento (div.areaDiv).
// type: O tipo do evento (neste caso, "mousemove").
// target: O elemento HTML que disparou o evento (a div com a classe areaDiv).

//event armazena todas as informações sobre o evento disparado.
function mostrarPosicaoMouse(event) {
  let coordenadas = document.getElementById('coordenadas');
  if (coordenadas instanceof HTMLParagraphElement) {
    let x = event.offsetX; // Posição X do mouse relativa à div
    let y = event.offsetY; // Posição Y do mouse relativa à div

    coordenadas.textContent = `Posição do mouse: X: ${x}, Y: ${y}`;
  }
}
