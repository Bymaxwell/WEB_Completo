const pessoa = {
    nome: "Ana",
    idade: 19,
    endereco: {
        logradouro: "Rua Exemplo ",
        numero: 12,
        bairro: "Bairro exemplo"
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome} = pessoa;
console.log(sobrenome);

const {endereco: {logradouro, numero, bairro}} = pessoa;
console.log(logradouro, numero, bairro);

// Destructuring 2

const [a, b, c, d] = [1, 2, 3, 4]
console.log(a, b, c , d);

const [e, f, , g, h] = [9, 8, 7, 6]
console.log(e, f, g, h);

const [, [, segundo_segundo]] = [[1, 2, 3], [4, 5, 6]]
console.log(segundo_segundo);

//Destructuring 3/4

function rand({min=0, max=1000}){
    const valor = Math.random()*(max-min)+min;
    return Math.floor(valor);
}

console.log(rand({max: 50, min: 40}))
console.log(rand({}));
//console.log(rand()); Erro de compilação

function rand_2([min=0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random()*(max-min)+min;
    return Math.floor(valor);
}

console.log(rand_2([50, 40]));
console.log(rand_2([]));
//console.log(rand_2()); Também retorna um erro






