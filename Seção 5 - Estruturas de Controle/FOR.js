let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

for(let i=1; i<=10; i++){
    console.log(i);
}

const notas = [9.25,2.34,3.67,4.12,5.55,6.29,7.84,8.14,9.16,10]

for(let i=9; i>-1; i--){
    console.log(notas[i]);
}

//FOR IN
console.log('FOR IN')
for (let i in notas){
    console.log(notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 19,
    cor_favorita: 'azul',
    comida_favorita: 'macarronada'
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
