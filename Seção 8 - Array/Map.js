//MAP 01 - Conhecendo o Map
const nums = [1,2,3,4,5]

//Map é um For com propósito

let resultado = nums.map(function(e){
    return e*10
})

console.log(resultado)

const soma_10 = e=> 10+e
const triplo =  e=> 3*e
const money =   e=> `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma_10).map(triplo).map(money)

console.log(resultado)


//MAP 03 - Criando uma própria função Map

Array.prototype.MAP_MAX = function(funcao_aplicavel){
    const Novo_array = []
    for(let i=0; i<this.length; i++){
        Novo_array.push(funcao_aplicavel(this[i], i, this))
    }
    return Novo_array
}


//MAP 02 - Trabalhando com JSON

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}', 
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta Azul",  "preco": 7.50}'
]

//Retornar um array somente com os preços

const tooObject = e => JSON.parse(e)
const somentePrecos = e => e.preco

let results = carrinho.MAP_MAX(tooObject).MAP_MAX(somentePrecos)

console.log(results)



