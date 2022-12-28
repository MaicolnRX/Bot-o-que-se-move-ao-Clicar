const button = document.getElementById("elusiveButton");



// aqui define a posição inicial do botão no meio da tela
button.style.top = `${window.innerHeight / 2 - button.offsetHeight / 2}px`;
button.style.left = `${window.innerWidth / 2 - button.offsetWidth / 2}px`;


// aqui define a função que moverá o botão para uma nova posição aleatória quando o usuario clicar
function moveButton() {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  button.style.top = `${newY}px`;
  button.style.left = `${newX}px`;
}


// aqui adiciona um manipulador de eventos de clique ao botão
button.addEventListener("click", moveButton);
