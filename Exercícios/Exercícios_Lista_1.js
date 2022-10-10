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

/*
//Questão 07
function Bhaskara(a, b, c){
    if((b*b)-(4*a*c) < 0){
        return 'Raízes Complexas'
    }
    x_1 = (-b+Math.pow(((b*b)-(4*a*c)), 0.5))/(2*a)
    x_2 = (-b-Math.pow(((b*b)-(4*a*c)), 0.5))/(2*a)
    return [x_1, x_2]
}
*/

/*
//Questão 08
function recordes(pontuacoes){
 
    pontuacoes_array_s = pontuacoes.split(' ');

    //Convertendo os valores para inteiro
    for(let i=0; i<pontuacoes_array_s.length; i++){
        pontuacoes_array_s[i] = parseInt(pontuacoes_array_s[i])
    }

    contador = 0;
    menor = pontuacoes_array_s[0];
    indice_menor = 0;
    maior = pontuacoes_array_s[0];
    indice_maior = 0;

    //Encontra o menor
    for(let i=0; i<pontuacoes_array_s.length; i++){
        if(pontuacoes_array_s[i]<menor){
            menor = pontuacoes_array_s[i];
            indice_menor = i+1; }
    }
   
    //Encontra o recorde incial
    for(let i=0; i<pontuacoes_array_s.length; i++){
        if(pontuacoes_array_s[i] > maior){
            maior = pontuacoes_array_s[i];
            indice_maior = i+1;
            break; }
    }
    

    //Conta quantos recordes
    for(let i=indice_maior; i<pontuacoes_array_s.length; i++){
        if(pontuacoes_array_s[i] >= maior){
            contador += 1;}
    }

    return [contador, indice_menor]
}
*/

/*
//Questão 9
function analise_notas(nota){
    aprovado = false;
    arrendondar_valor = 0;
    
    //Arredonda primeiro 
    if (5-nota%5 < 3 && nota >= 38) arrendondar_valor = 5-nota%5;
    nota += arrendondar_valor;

    //Analisa se está aprovado após o arredondamento 
    if (nota >= 40) aprovado = true;

    return [aprovado, nota];    
}
*/

/*
//Questão 10
divisivel_por_3 = number => console.log((!(number%3)))
*/

/*
//Questão 11
function bissexto(ano){
    eh_bissexto = false
    if (ano%400 == 0) eh_bissexto = true;
    else if (ano%100 == 0) eh_bissexto = false;
    else if (ano%4 == 0) eh_bissexto = true;

    console.log(eh_bissexto);
}
*/

/*
//Questão 12
function fatorial(number){
    if (number == 0) return 1

    return (number*fatorial(number-1))
}
*/

/*
//Questão 13
function tipo_dia(dia){
    switch(dia){
        case 1: console.log("Fim de semana"); break;
        case 7: console.log("Fim de semana"); break;
        case 2: case 3: case 4: case 5: case 6: console.log("Dia útil"); break;
        default: console.log("Dia inválido")
    }
}
*/

/*
//QUestão 14
function vendas(fruta){
    switch(fruta){
        case 'maçã': console.log("Não vendemos essa fruta aqui"); break;
        case 'kiwi': console.log("Estamos com escassz de kiwis"); break;
        case 'melancia': console.log("Aqui está, são 3 rais o quilo"); break;
        default: console.log("Fruta inválida"); break;
    }
}
*/

/*
//Questão 15
function concessionaria(carro){
    switch(carro){
        case 'hatch': console.log("Compra efetuada com sucesso"); break;
        case 'sedan': 
        case 'motocicleta': 
        case 'caminhonete': console.log("Tem certeza que não prefere esse modelo?"); break;
        default: console.log("Não trabalhamos com este tipo de automóvel aqui"); break;
    }
}
*/

/*
//Questão 16
function calculadora(a, operacao, b){
    switch(operacao){
        case "+": console.log(a+b);break;
        case "-": console.log(a-b);break;
        case '*': console.log(a*b); break;
        case "/": console.log(a/b);break;
        default: console.log("Operação Inválida!")
    }
}
*/











































