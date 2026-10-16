// EVENTO CHANGE
// CHANGE DISPARA QUANDO O USUÁRIO SAI DA CAIXINHA

document.getElementById("campoChange").addEventListener("change", () => {

    //PEGA O VALOR DIGITADO PELO USER
    const textoDigitado = document.getElementById("campoChange").value;

    //PEGA O TEXTO DE BAIXO E TROCA O VALOR, PELO QUE A PESSOA DIGITOU E GUARDEI NA VARIAVEL
    document.getElementById("resultadoChange").innerText = "Voçe digitou: " + textoDigitado

})

// EVENTO INPUT
document.getElementById("campoInput").addEventListener("input" , function (){
    //PEGA O VALOR DIGITADO PELO USUARIO
    const textoDigitado = this.value
    //GUARDEI NA VARIAVEL
    document.getElementById("resultadoInput").innerText = textoDigitado
})

//=======================================================================================

//GUARDA TODO O HTML DO FORMULARIO
const formulario = document.getElementById("formJogador")
//GUARDA O HTML DA LISTA DE JOGADORES (QUE SE INICIA VAZIA)
const lista = document.getElementById("listaJogadores")

//FUNCAO PARA ATIVAR QUANDO O USUARIO TENTAR ENVIAR OS DADOS
formulario.addEventListener("submit", function(evento){
    evento.preventDefault() //impede que a pagina seja recarregada ao acionar o submit, alem de outras coisas

    //VERIFICA O CONTEUDO DIGITADO NAS CAIXINHAS, GUARDA EM VARIAVEIS
    const inputNome = document.getElementById("nome").value
    const inputCamisa = document.getElementById("camisa").value
    const inputPosicao = document.getElementById("posicao").value

    //CRIAR UM OBJETO COM AS INFORMAÇÕES
    const jogador = {
        nome: inputNome,
        posicao: inputPosicao,
        camisa: inputCamisa
    }

    console.log(jogador)

})

//FUNÇÃO PARA CRIAR UM CARD
function adicionarJogador(jogadorAtual){
    // cria o elemento card - pai de todos
    const card = document.createElement("div")

    //cria elemento do card
    const titulo = document.createElement("h4")
    const textoPosicao = document.createElement("p")
    const textoCamisa = document.createElement("p")

    //preencher os elementos, com os valores do objeto
    titulo.textContent = jogadorAtual.nome
    textoPosicao.textContent = "Posicão: " + jogadorAtual.posicao 
    textoCamisa.textContent = "Camisa: " + jogadorAtual.camisa

    card.appendChild(titulo)
    card.appendChild(textoPosicao)
    card.appendChild(textoCamisa)

    //adiciona o card, como filho da lista de jogadores
    lista.appendChild(card)

    adicionarJogador(jogador)

    //RESETA O FORMULARIO DEPOIS QUE ENVIA
    formulario.reset()
}
