const a = 1
const b = 2
const c = 3

const objeto_1 = {a:a, b:b, c:c}
const objeto_2 = {a, b, c} // É igual a const objeto = {a:a, b:b, c:c}

console.log(objeto_1, objeto_2)


const nomeAtrib = 'nota'
const valorAtrib = 7.87

const objeto_3 = {}
objeto_3[nomeAtrib] = valorAtrib
console.log(objeto_3)

const objeto_4 = {[nomeAtrib]: valorAtrib}
console.log(objeto_4)

const objeto_5 = {
    funcao_1: function() {},
    funcao_2(){}
}

console.log(objeto_5)