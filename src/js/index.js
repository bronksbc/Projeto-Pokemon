const body = document.querySelector("body");
const imagemBotaoTrocadeTema = document.querySelector("img.imagem-botao");

function alterarTema() {
  VerificaBody = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro")

  if (VerificaBody) {
    imagemBotaoTrocadeTema.setAttribute("src", "src/imagens/sun.png");
  } else {
    imagemBotaoTrocadeTema.setAttribute("src", "src/imagens/moon.png");
  }
}

