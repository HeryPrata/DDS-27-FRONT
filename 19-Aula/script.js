console.log("Manda um oi ai pra eu ver...")

//FUNÇÕES
//SÓ EXECUTA

function teste(){
    console.log("ESTOU FUNCIONANDO");
    
}

//EXECUTANDO A FUNÇÃO
teste()

// com retorno

function soma(){
    return 3 + 4
}

console.log(soma());

//Mostra apenas o texto da função, não executa.
console.log(soma);


//com parametros
parametro = prompt("Digite um numero: ")
function teste2(parametro){
    console.log("O parametro enviado foi: ", parametro);
    for (var i; i < 9; i++){
        console.log(i*parametro);      
    }

}

console.log(teste2())  


//FAZ ACOES E RETORNA RESULTADOS
function media(n1,n2){
   let resultado = (n1 + n2) / 2 // a variavel let morre ao sair do escopo da funcao media.
   return resultado
}

//GUARDA RESULTADO EM VARIAVEL, PRA DEPOIS UTILIZAR
var final = media(9,7)
console.log("Resultado da média: ", final)

//FUNCAO ANONIMA
// é uma função que não tem nome, e seu texto é guadado em uma variável
var mensagem = function(){
    console.log("OI, MEU CHAPA");
    
}

//mostra o texto da funcao
console.log(mensagem)
//executa a funcao
mensagem()

//ARROW FUNCTION - FUNCAO DE SETA
//FORMA MAIS COMUM DE ESCREVER FUNCOES EM JAVASCRIPT
// => significa pertence há....
const multiplicar  = (x,y) => {
    let resultado = primeiro = x, segundo = y
    resultado = primeiro * segundo
    return resultado
}

console.log("O resultado da multiplicado é: ", multiplicar(7,4));

//MENOR AINDA
//QUANDO SO TEM UMA LINHA DE RETORNO, O RETURN PODE SER OMITIDO TAMBEM
const dobro = numero => numero * 2
console.log("O Dobro é: ", dobro(42));

const div = (x) => {
    let resultado = x / (x/x)
    return resultado
}

console.log(div(10));
