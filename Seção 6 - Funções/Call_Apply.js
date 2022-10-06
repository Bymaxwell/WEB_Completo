function getPreco(imposto=0, moeda = "RS"){
    return `${moeda} ${this.preco*(1-this.desc)*(1+imposto)}`

}

const Produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
console.log(Produto.getPreco())

const Carro = {preco: 49990, desc: 0.2}

console.log(getPreco.call(Carro, 0.17, '$'))
console.log(getPreco.apply(Carro, [0.17, '$']))