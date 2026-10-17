pedidosRegistrados = []

//array de objetos
var produtos = [
    {nome: "Xburguer", preco: 15, categoria: "Lanche"},
    {nome: "Batata Frita", preco: 10, categoria: "Acompanhamento"},
    {nome: "Refrigerante", preco: 8, categoria: "Bebida"},
    {nome: "Milk-shake", preco: 12, categoria: "Bebida"},
    {nome: "Sorvete", preco: 7, categoria: "Sobremesa"},

]

 function cadastrarPedido(){
    var pNome = prompt("Digite o nome: ")
    var pQtd = prompt("Digite a quantidade: ")

    for(var i = 0; i < produtos.length; i++){
        if(pNome.toLowerCase() == produtos[i].nome.toLowerCase()){
            console.log("O pedido localizado");
            valorTotal = produtos[i].preco * pQtd
            console.log("O pedido selecionado é: ", produtos[i].nome, ". É a quantidade total: " ,pQtd, ". O valor total do pedido: ", valorTotal);

            pedidosRegistrados.push(
                {
                    nome: produtos[i].nome,
                    preco: produtos[i].preco,
                    categoria: produtos[i].categoria,
                    quantidade: pQtd

                },

            )
            break
        }
        
    }  

}

 function listarMenu(){
    console.log("Opções disponiveis:");
    for( var i = 0; i < 5; i++){
        console.log(`Nome: ${produtos[i].nome} || Preco: ${produtos[i].preco} || Categoria: ${produtos[i].categoria}`);
    }
    
}

 function listarPedidos(){
    console.log("Pedidos Registrados:");
    for( var i = 0; i < pedidosRegistrados.length; i++){
        console.log(`Nome: ${pedidosRegistrados[i].nome} || Preco: ${pedidosRegistrados[i].preco} || Categoria: ${pedidosRegistrados[i].categoria} || Quantidade: ${pedidosRegistrados[i].quantidade}`);
    }
    
} 













cadastrarPedido()
console.log(pedidosRegistrados);
listarMenu()
console.log(listarPedidos())