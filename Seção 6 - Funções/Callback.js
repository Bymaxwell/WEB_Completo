const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir);


//Callback 2

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []

for(let i in notas){
    if(notas[i] <7){
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

const notasBaixas2 = notas.filter(function(nota){
    return nota <7;
})

console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota)=>nota<7)

console.log(notasBaixas3);


//Callback 3 - Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function(a){
    console.log('O evento ocorreu!')
}

