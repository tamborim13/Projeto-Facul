const imagens = []
let indice = 0

const imagem = document.querySelector(".container img")
const botao = document.querySelector("button")

function trocarImagem() {
  indice = (indice + 1) % imagens.length
  imagem.src = imagens[indice]
}

botao.addEventListener("click", trocarImagem)
