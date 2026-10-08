console.log("AOBA")

// LACOS DE REPETICAO

//FOR = PARA / DURANTE
// i = variavel de controle
// i < 10 = duracao do laco

for(var i = 0; i < 10; i++){
    console.log("Eu sou o milior");
    console.log(i)
}

console.log("ACABOU!!!")

var indice = 1
while(indice < 15){
    indice = indice + 1
    console.log("Never too much")
    console.log(indice)
}

console.log("ROCKSTAR MADE!!!!!!!!!")

//ARRAY

var aluno1 = "Cris"
var aluno2 = "Lucas"
var aluno3 = "Maria"

var alunos = ["Cirilo", "Maria Joaquina", "Kokimoto"]
var media =  [5, 9, 10]

var lista = ['Arroz', 6, true, "outro", 7.7, "Dougras"]

// mostra o array
console.log(lista)
console.log(alunos, media)

// mostra um elemento especifico
console.log(lista[3])

// lenght - retorna o número de itens no array
console.log(lista.length)

//LISTA DE TIMES
var times = ["São Paulo", "Gama", "Santos", "Real Madrid", "Desportiva"]

for(var i = 0; i < 5; i++){
    console.log("O time atual é: "[i])
}

//INTERAGE COM O VALOR RETORNADO
for(var i = 0; i < times.length; i++){
    console.log("O time atual é: ", times[i])
}

// FUNCOES PARA INTERAGIR COM UM ARRAY
var frutas = ["Melancia", "Maçã", "Morango", "Abacaxi", "Uva Verde", "Goiaba"]

// ARRAY ORIGINAL
console.log(frutas);

//PRA ADICAO DE ELEMENTOS
//PUSH - ADICIONA NO FIM DO ARRAY

frutas.push("Uva")
console.log(frutas)

//unshift - adiciona no inicio do array
frutas.unshift("Maracujá")
console.log(frutas)

//PRA REMOCAO DE ELEMENTOS
//POP = REMOVE O ULTIMO ELEMENTO
var frutasRetirada = frutas.pop()
console.log("A última fruta era. ", frutasRetirada);

frutas.unshift("Banana")

// shift - remover do inicio do array
var exPrimeiraFruta = frutas.shift()
console.log("A ex primeira fruta era: ", exPrimeiraFruta);

//DESCOBRIR SE HÁ UM VALOR ESPECIFICO NESSE ARRAY
console.log("Garçom, tem pitu?: ", frutas.includes("Pitu"))
console.log("Garçom, tem maracuja?: ", frutas.includes("Maracujá"))


//ordernar o array
frutas.sort()
console.log(frutas)

//reverse - inverter o array
frutas.reverse()
console.log(frutas)

//convertendo o array em texto unico
console.log(frutas.toString())

console.log(frutas.join(" - "));

//SLICE - COPIA DE PARTE ESPECIFICA DO ARRAY
// (em qual indice começa, quantos elementos serão copiados)
var parteCopiada = frutas.slice(0,2)
console.log("Cópia: ", parteCopiada);


//SPLICE
//PRA REMOVER
var removidos = frutas.splice(1,2)
console.log("Removido: ", removidos);

//ADICIONAR
//ADICIONA, SEM SUBSTITUIR NINGUEM
frutas.slice(2,0, "Coca - Cola", "Laranja", "Caju")
console.log(frutas);

//ADICIONAR COM SUBSTITUICAO
frutas.splice(1, 3, "Computador", "Mouse")
console.log(frutas)

listaRoupa = ["Camisa", "Meia","Calça"]
console.log(listaRoupa)

escolhaRoupa = prompt("Digite qual das opções deseja: ")

listaRoupa.push(escolhaRoupa)
console.log(listaRoupa)