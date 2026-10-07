//DESVIOS CONDICIONAIS

// IF = SE

var estaVivo = true

// primeira comparacao
if(estaVivo){
    console.log("Parabens, que legal")
}

// segunda comparacao. so vem pra ca se a primeira der errado

else if(estaVivo == undefined){
    console.log("Mano, sei la como ce ta")
}

//último caso, so entra aqui se todos acima deram errado

else{
    console.log("Morreu, mas passa bem")
}

//SWITCH/CASE

var camisa = "Preta"

switch(camisa){
    case "Preta":
        console.log("PARABENS, ACABAR DE GANHAR UM VINIL DA SABRINA CARPENTER");
    break
    
    case "Branca":
        console.log("PARABENS, VOCE GANHOU UM VINIL DO PLAYBOI CARTI");
    break

    case "Vermelha":
        console.log("PARABENS, VOCE GANHOU UM VINIL DO PINK FLOYD");
    break

    default: 
        console.log("MELHORE!!!");
                     

}

//PROMPT - INTERAGE COM O USUARIO E COLETA UM VALOR

var preferido = prompt("QUAL É O SEU PET FAVORITO DO MUNDO DOS FILMES:  ")

console.log("Seu Pet preferido é: ", preferido)


// MINHA VERSAO
var a, b, c

if(c > (a + b)){
    console.log(1)
}

if(b < a){
    console.log(2)
}

else{
    console.log(3)
}

//PROFESSOR
var caixa1 = Numberprompt("Valor Da Caixa 1:  ")
var caixa2 = Numberprompt("Valor Da Caixa 2:   ")
var caixa3 = Numberprompt("Valor Da Caixa 3:   ")

// && = e, || = ou
if((caixa < caixa2 && caixa2 < caixa3) || (caixa1 + caixa2 < caixa3)) {
    console.log(" Uma Viagem necessaria");

}

else if((caixa1 < caixa2 && caixa2 == caixa3) || (caixa1 == caixa2 && caixa2 < caixa3)){
    console.log("Duas viagens necessarias");
    
}

else{
    console.log("Tres Viagem necessarias");
    
}