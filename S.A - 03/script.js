pedidosRegistrados = []

//array de objetos
var produtos = [
    {nome: "Xburguer", preco: 15, categoria: "Lanche"},
    {nome: "Batata Frita", preco: 10, categoria: "Acompanhamento"},
    {nome: "Refrigerante", preco: 8, categoria: "Bebida"},
    {nome: "Milk-shake", preco: 12, categoria: "Bebida"},
    {nome: "Sorvete", preco: 7, categoria: "Sobremesa"},

]

 function cadastrarPedido(pNome, pQtd, callback){
    for(var i = 0; i < produtos.length; i++){
        if(pNome.toLowerCase() == produtos[i].nome.toLowerCase()){
            console.log("O pedido localizado");
            valorTotal = produtos[i].preco * pQtd
            console.log("O pedido selecionado é: ", produtos[i].nome, ". É a quantidade total: " ,pQtd, ". O valor total do pedido: ", valorTotal);

            pedidosRegistrados.push(
                {
                    produto: produtos[i].nome,
                    quantidade: pQtd,
                    precoUnitario: produtos[i].preco,
                    valorTotal: valorTotal

                },

            )
            break
        }
        
    }  

    if (callback) {
    callback();
}
}

 function listarMenu(callback){
    console.log("Opções disponiveis:");
    for( var i = 0; i < produtos.length; i++){
        console.log(`Nome: ${produtos[i].nome} || Preco: ${produtos[i].preco} || Categoria: ${produtos[i].categoria}`);
    }
    
    if (callback) {
    callback();
}
     
}

 function listarPedidos(){
    console.log("Pedidos Registrados:");
    for( var i = 0; i < pedidosRegistrados.length; i++){
        console.log(`Produto: ${pedidosRegistrados[i].produto} || Quantidade: ${pedidosRegistrados[i].quantidade} || Preço unitário: ${pedidosRegistrados[i].precoUnitario} || Valor total: ${pedidosRegistrados[i].valorTotal}`);
    }
    
} 


listarMenu();
var pNome = prompt("Digite o nome: ")
var pQtd = prompt("Digite a quantidade: ")
cadastrarPedido(pNome, pQtd, listarPedidos);
