console.log(typeof Object);

class Produto {};
console.log(typeof Produto);

//Java Script é altamente centrado em funções. Muito importante entender esse conceito

//Exemplos Funções sem retorno

function imprimeSoma(a, b){
    console.log(a+b);
}
imprimeSoma(45, 45);
imprimeSoma(2);
imprimeSoma(2, 3, 4, 5, 6, 7);
imprimeSoma();

//Exemplos Funções com retorno

function soma(a, b=1){
    return a+b;
}

console.log(soma(5, 6));
console.log(soma(2));

//Armazenando Funções em variáveis

const imprimirSOma = function (a, b) {
    console.log(a+b);
}

imprimirSOma(2,3);

//Armazenando uma Função Arrow em uma variável

const soma_01 = (a, b) => {
    return (a+b);
}
console.log(soma_01(4, 5));

//Retorno implícito

const subtracao = (a, b) => a-b;
console.log(subtracao(5, 4));











