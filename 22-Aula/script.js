// Console - Terminal do navegador
//console.log(console);

//Window - Janela do navegador
//window.alert()
//window.prompt()
//console.log(window)

//Document - DOM, SEU CODIGO HTML INTEIRO
console.log(document);
console.log(document.head)
console.log(document.body);

//SEÇÃO 1
//SELECIONA ELEMENTOS PELA TAG
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

//SELECIONA OS ELEMENTOS PELA CLASS
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos);

//SELECIO ELEMENTO PRO ID
var especifico = document.getElementById("p3")
console.log(especifico);

//ALTERAÇÃO DE ESTILOS
//PEGO PELO ID
especifico.style.backgroundColor = "green"
especifico.style.color = "yellow"

//PELO CLASS
paragrafos[0].style.backgroundColor = "pink"

//PELA TAG
titulos[2].style.backgroundColor = "orange"

//SECÃO 2
//FUNCAO ATIVADA, MAS CRIADA PELO JAVASCRIPTS
function cliquei(){
    console.log("SAI FORA, PAIZAO!");
    
}

//FUNCÃO ATIVADA, MAS CRIADA PELO JAVASCRIPT,VIA EVENTLISTENER
document.getElementById("btnCliqueDuplo").addEventListener("dblclick", () => {
    var cliques = cliques + 1
    console.log(cliques);
     
})

//BOTÃO CLICÁVEL, QUE ALTERA VARIOS ELEMENTOS
document.getElementById("shazam").addEventListener("click", () => {
    for(var i = 0; i < titulos.length; i++) {
        titulos[i].style.backgroundColor = "red"
        titulos[i].style.color = "yellow"
        titulos[i].style.fontSize = "100px"
    }

})

// USO O THIS
//funcao ativada, e o parametro veio com o this
function quemFoi(elementoQueChamou){
    console.log(elementoQueChamou);
}

// SEÇÃO 3
document.getElementById("criaTexto").addEventListener("click", () => {
    //INNERTEXT - TEXTCONTENT
    document.getElementById("textoCriado").innerText = "Falei que ia mudar, toma ai!"
})

//ALTERA O HTML
document.getElementById("criaHtml").addEventListener("click", () => {
    // INNERHTML - ALTERA O ELEMENTO
        document.getElementById("vazia").innerHTML += "Não é magia, é tecnologia. "
    
    
})



