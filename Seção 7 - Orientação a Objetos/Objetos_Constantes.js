//pessoa -> Endereço de memória -> {....}
const pessoa = {nome: 'João'}

pessoa.nome = 'Pedro' //Nesse momento endereço não é alterado
console.log(pessoa)

//Pessoa recebe um novo Objeto em outro endereço... Mas pessoa é Constante, Logo aponto somente para um endereço fixo.
//pessoa = {nome: 'Alfa'} GERA erro

Object.freeze(pessoa)
pessoa.nome = 'Maria' //Tentantiva de atribuição é ignorada por o Objeto está congelada
console.log(pessoa)
delete pessoa.nome
console.log(pessoa)