//Exercícios após finalização da Seção 6

/*
//Questão 01
function calc(x, y){
    console.log(`Soma: ${x+y}`);
    console.log(`Subtração: ${x-y}`);
    console.log(`Multiplicação: ${x*y}`)
    console.log(`Divisão: ${x/y}`)
}
*/

/*
//Questão 02

function classificacao_triangulo(a, b, c){
    lados_iguais = 0;
    if (a == b){ lados_iguais += 1}
    if (b == c){ lados_iguais += 1}
    if (a == c){ lados_iguais += 1}

    if(lados_iguais == 3){ console.log('O triângulo é Equilátero')}
    else if(lados_iguais == 1){ console.log('O triângulo é Isósceles')}
    else console.log('O triângulo é Escaleno')       
}
*/

/*
//Questão 03
function exponenciacao(base, expoente){
    produto = 1;
    for(i=1; i<=expoente; i++){
        produto *= base;
    }
    console.log(produto)
}
*/

/*
//Questão 04
function divisao_results(dividendo, divisor){
    console.log(`O resultado da divisão é ${Math.floor(dividendo/divisor)}`);
    console.log(`O resto da divisão é: ${dividendo%divisor}`);
}
*/

/*
//Questão 05
function corrigir_erro(number){
    parte_inteira = Math.floor(number);
    number = number-parte_inteira;
    parte_fracionaria = Math.trunc(number*100);
    return `R$${parte_inteira},${parte_fracionaria}`
}
*/

/*
//Questão 06
function Juros_simples(capital, taxa, tempo){
    return capital*(1+taxa*tempo); 
}

function Juros_compostos(capital, taxa, tempo){
    juros = 0;
    for(i = 1; i<=tempo; i++){
        juros = capital*taxa;
        capital += juros;
    }
    return capital;
}
*/















