function opcoes(){
    //THIS NESSE CONTEXTO, E O CARA QUE ESTA CHAMANDO A FUNCAO
    console.log("As opções são: ", this.tamanhos.toString());
    
}



console.log("Olá, mundo");

var produto1 = {
    nome: "Coca - Cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanho: ["200ml","500ml","1l"],
    //CRIA UM METODO INTERNO
    descricao: function () {
        // THIS = REFERENCIA O PROPRIO OBJETO
        console.log(`A ${this.nome} é um refrigerante carbonatado, doce e de cor escura, produzido mundialmente pela The Coca-Cola Company`);
        
    },
    //USA UMA FUNCAO EXTERNA COMO SEU METODO
    verTamanhos: opcoes
}

produto1.descricao()
produto1.verTamanhos

var produto2 = {
    nome: "Coxinha",
    categoria: "Salgados",
    quantidade: 15,
    tamanho: ["Pequeno","Medio","Grande"],
    descricao: function () {
        console.log("A Coca-Cola é um refrigerante carbonatado, doce e de cor escura, produzido mundialmente pela The Coca-Cola Company");
        
    },
}

//METODO O LOKO (POR CAUSA DO LUCAS)
var aluno = {
    nome: "Pedro Ayres",
    anoEscolar: "9",
    turma: "C",
    notas: [6,7, 8],
    media: function () {
       let n1 = this.notas[0]
       let n2 = this.notas[1]
       let n3 = this.notas[2]

       return((n1,n2,n3) / 3)
    }
}

console.log(aluno.notas)

console.log(aluno.media(aluno.notas[0]), aluno.media(aluno.notas[1]), aluno.media(aluno.notas[2]))

aluno.media()