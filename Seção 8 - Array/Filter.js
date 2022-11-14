//FILTER 01 - Conhencendo o Filter
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]


const frageis = p => p.fragil
const caro = p => p.preco>=500? true: false 

const results = produtos.filter(frageis).filter(caro)

console.log(results)

//FILTER 02 - Criando minha própria função Filter

Array.prototype.FILTER_MAX = function(callback){
    const Array_modificado = []
    for(let i=0;i<this.length; i++){
        if(callback(this[i], i, this)){
            Array_modificado.push(this[i])
        }
    }
    return Array_modificado
}

const produtos_02 = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

 

const results_02 = produtos_02.FILTER_MAX(frageis).FILTER_MAX(caro)

console.log(results_02)



