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



