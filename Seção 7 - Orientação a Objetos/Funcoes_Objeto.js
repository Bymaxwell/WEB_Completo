const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    peso: 52
}

console.log(Object.keys(pessoa)) //Pega as chaves
console.log(Object.values(pessoa)) //Pega os valores

console.log(Object.entries(pessoa)) //Pega o par CHAVE->VALOR

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, writable: false, value: '18/10/2022'
})

pessoa.dataNascimento = '02/05/2023'
console.log(pessoa.dataNascimento)


//Object.assign (ECMAScript 2015) //Pega os atributos de outros objetos para um objeto de destino
const dest =  {a:1 }
const obj_1 = {b: 2}
const obj_3 = {c: 3, a: 4}
const obj_resultante = Object.assign(dest, obj_1, obj_3)

console.log(dest)

Object.freeze(obj_resultante)
obj_resultante.c = 1234

console.log(dest)

