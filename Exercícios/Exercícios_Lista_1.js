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

/*
//Questão 17
function auemnto(salario, plano){
    switch(plano){
        case 'A': console.log(`Novo salário: ${(salario*1.10).toFixed(2)}`); break;
        case 'B': console.log(`Novo salário: ${(salario*1.15).toFixed(2)}`); break;
        case 'C': console.log(`Novo salário: ${(salario*1.20).toFixed(2)}`); break;
        default: console.log("Plano Inválido");
    }
}
*/

/*
//Questão 18
function extenso(number){
    switch(number){
        case 0: console.log("Zero");  break;
        case 1: console.log("Um");    break;
        case 2: console.log("Dois");  break;
        case 3: console.log("Três");  break;
        case 4: console.log("Quatro");break;
        case 5: console.log("Cinco"); break;
        case 6: console.log("Seis");  break;
        case 7: console.log("Sete");  break;
        case 8: console.log("Oito");  break;
        case 9: console.log("Nove");  break;
       case 10: console.log("Dez");   break;
       default: console.log("Número inválido!")

    }
}
*/

/*
//Questão 19
function lanchonete(lanche, quantidade){
    switch(lanche){
        case 100: console.log(`O valor do lanche é: ${(3.00*quantidade).toFixed(2)}`);break;
        case 200: console.log(`O valor do lanche é: ${(4.00*quantidade).toFixed(2)}`);break;
        case 300: console.log(`O valor do lanche é: ${(5.50*quantidade).toFixed(2)}`);break;
        case 400: console.log(`O valor do lanche é: ${(7.50*quantidade).toFixed(2)}`);break;
        case 500: console.log(`O valor do lanche é: ${(3.50*quantidade).toFixed(2)}`);break;
        case 600: console.log(`O valor do lanche é: ${(2.80*quantidade).toFixed(2)}`);break;
        default: console.log("Produto não existente")
    }
}
*/

/*
//Questão 20
function minimo_cedulas(valor){
    cedulas = [100, 50, 10, 5, 1]
    quant_cedulas = []
    for(let i=0; i<cedulas.length; i++){
        quant_cedulas[i] = parseInt(valor/cedulas[i])
        valor = valor%cedulas[i]
    }
    
    for(let i=0; i<quant_cedulas.length; i++){
        if(quant_cedulas[i]==0){}
        else if(i == 0) console.log(`${quant_cedulas[i]} cédula(s) de R$ 100.00`)
        else if(i == 1) console.log(`${quant_cedulas[i]} cédula(s) de R$  50.00`)
        else if(i == 2) console.log(`${quant_cedulas[i]} cédula(s) de R$  10.00`)
        else if(i == 3) console.log(`${quant_cedulas[i]} cédula(s) de R$   5.00`)
        else if(i == 4) console.log(`${quant_cedulas[i]} cédula(s) de R$   1.00`)
    }
}
*/

/*
//Questão 21
function plano_saude(idade){
    if (idade < 10) console.log("R$ 80.00");
    else if(idade >= 10 && idade < 30) console.log("R$ 50.00")
    else if(idade >= 30 && idade < 60) console.log("R$ 95.00")
    else console.log(" R$ 130.00")
}
*/

/*
//Questão 22
function anuidade(mes, valor){
    montante = valor;
    for(let i=0; i<mes; i++){
        juros = montante*0.05;
        montante += juros;
    }
    return montante
}
*/

/*
//Questão 23
function media_aluno (codigo, n1, n2, n3){
    media = (n1*4+n2*3+n3*3)/10
    if (media >= 5) console.log(`${codigo}: Nota_1:${n1}, Nota_2:${n2}, Nota_3:${n3}, Media:${media} APROVADO`)
    else console.log(`${codigo}: Nota_1:${n1}, Nota_2:${n2}, Nota_3:${n3}, Media:${media} REPROVADO`)
}
*/

/*
//Questão 24
function repeticoes(rep){
    for(let i=0; i<rep; i++){
        console.log("Hello World!")
    }
}
*/

/*
//Questão 25
function um_ate(limite){
    for(let i=1; i<=limite; i++){
        console.log(i)
    }
}
*/

/*
//Questão 26
function pares(limite){
    for(let i=1; i<=limite; i++){
        if(i%2==0) console.log(i);
    }
}
*/

/*
//Questão 27
function analise_altura(menor, maior, taxa_menor, taxa_maior){
    if( taxa_menor >= taxa_maior){ 
        return (maior-menor)/(taxa_menor-taxa_maior)+1;
    }
    else return 0
}
function altura(altura_1, taxa_1, altura_2, taxa_2){
    tempo;
    maior = 0;
    menor = 0;
    if (altura_1 < altura_2) tempo = analise_altura(altura_1, altura_2, taxa_1, taxa_2)
    if (altura_2 < altura_1) tempo = analise_altura(altura_2, altura_1, taxa_2, taxa_1)

    if(tempo) console.log(`O menor ultrapassará o maior em ${tempo} anos`)
}
*/

/*
//Questão 28
function impar_par(vetor){
    par = 0;
    impar = 0;
    for(let i=0; i<vetor.length; i++){
        if(vetor[i]%2==0) par += 1;
        else impar += 1;
    }

    return [impar, par]
}
*/

































































