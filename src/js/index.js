// Pegar elemento do HTML
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// Identificar o botão selecionado
botoesCarrossel.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = desativaBotaoSelecionado();

    // Desmarcar botão Selecionado
    desativarBotaoSelecionado(botaoSelecionado);

    // Marcar o botão clicado
    botao.classList.add("selecionado");

    // Esconder a imagem anterior
    esconderImagemAtiva();

    // Mostrar a imagem do botão clicado
    MostrarImagemdeFundo(i);

    // Esconder infos da imagem anterior
    esconderInfosAtivas();

    // Mostrar a info correta
    mostrarInfos(i);
  });
});

// Funções

function desativarBotaoSelecionado(botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
}

function mostrarInfos(i) {
  informacoes[i].classList.add("ativa");
}

function esconderInfosAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function MostrarImagemdeFundo(i) {
  imagens[i].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativaBotaoSelecionado() {
  return document.querySelector(".selecionado");
}
