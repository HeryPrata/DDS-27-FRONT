console.log("SHAZAM")

var musicas = ["Me De Motivos", "Dios Es Un Stalker", "New Slaves"]
var artistas = ["Tim Maia","Rosalia", "Kanye West"]
for(var i = 0; i < musicas; i++){
    console.log(musicas[i], "-", artistas[i])
}

//OBJETO
var filme1 = {
    //ESTRUTURA = chave: valor  
    titulo: "Arrival",
    genero: "Sci-fi",
    anoLan: 2016


}   

console.log(filme1);

//ACESSANDO UMA CHAVE ESPECIFICA
console.log(filme1.titulo); 

//UTILIZACAO DA CRASE PRA JUNTAR TEXTO E VARIAVEL
console.log(`O filme: ${filme1.titulo} foi lancado em ${filme1.anoLan}`)
//MESMA FUNCAO, POREM ESCRITA DE FORMA DIFERENTE
console.log(`Genero: ${filme1["genero"]}`)

var intervalo = {
    duracao: "20 minutos",
    termino: "20:20",
    inicio: "20:00",
    local: "Senai beira mar - Praca de alimentação",
}

console.log(`O intervalo começa as: ${intervalo["inicio"]} e termina ${intervalo["termino"]}. A duração e de ${intervalo["duracao"]} e o local e no ${intervalo["local"]}`)

//OBJETO VAZIO
var garrafa = {}
console.log(garrafa);

//CRIAR AS PROPRIEDADES
garrafa.cor = "bege"
garrafa.preco = 99
garrafa.tamanho = "710ml"
garrafa["tampada"] = false
console.log(garrafa)

//ALTERA UMA PROPRIEDADE EXISTENTE
garrafa.cor = "vermelho" // o valor vai ser substituido de "bege" pra "vermelho"

var novaPropriedade = prompt("Nova propriedade: ")
garrafa[novaPropriedade] = prompt("Valor: ")
console.log(garrafa[novaPropriedade])

// AINDA SOBRE OBJETOS
var leao = {
    nome: "Simba",
    temPelo: true,
    especie: "Domestico",
    peso: 60,

    //Métodos,
    andar: function(){
        console.log("Estou andando, confia. Eu nunca mentiria pra voce")
    },

    falar: () => {
        console.log("UAR UAR UAU GRRRRRRRRRRRRR")
    }
}

console.log(leao)
//MOSTRA O TEXTO DO METODO
console.log(leao.andar);
//EXECUTAR O METODO DO LEAO
leao.falar()
