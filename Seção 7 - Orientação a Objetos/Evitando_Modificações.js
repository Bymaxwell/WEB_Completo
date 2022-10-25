//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Entensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

//Object.seal

const pessoa = {
    nome: 'Juliana', 
    idade: 35
}

Object.seal(pessoa)
console.log(pessoa)
pessoa.idade = 23

delete pessoa.nome
pessoa.sobrenome = 'Pires'

console.log(pessoa)
//Object.freeze = SELADO + SEM MODIFICAÇÕES
