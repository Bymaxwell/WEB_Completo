//Factory simples
function criarProduto(nome, preco, desconto){
    return {
        nome: nome,
        preco: preco,
        desconto: desconto
    }
}


//Factory 2
produto_1 = criarProduto('TV', 1200, 0.4)
produto_2 = criarProduto('Microondas', 500, 0.1)
console.log(produto_1, produto_2);




