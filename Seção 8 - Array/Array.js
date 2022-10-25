console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Carlos', 'Bia', 'Ana')
console.log(aprovados)

aprovados = ['Alessandro', 'Arthur', 'João']
console.log(aprovados)

for(let i=0; i<3; i++){
    console.log(aprovados[i])
}

aprovados[3] = 'Carlos'
aprovados.push('Bia')

console.log(aprovados.length)
console.log(aprovados.sort())

aprovados = ['Carlos', 'Bia',  'Ana']
aprovados.splice(1, 1)
console.log(aprovados)
aprovados.splice(1, 1, 'Opera', 'Thor')
console.log(aprovados)