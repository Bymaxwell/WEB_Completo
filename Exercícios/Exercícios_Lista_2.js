/*
//Questão 01
const ola_mundo = function(texto){
    string_formatada = `Olá, ${texto}!`
    return string_formatada
}
*/

/*
//Questão 02

const anos_em_dias = function(anos){
    return 365*dias
}

    //Fazendo melhor. Dias -> Anos, meses, semanas, dias

const dias_em_anos = function(dias){
    dias_atuais = dias
    a = Math.floor(dias/365), dias = dias%365
    m = Math.floor(dias/30), dias = dias%30
    s = Math.floor(dias/7)
    d = dias%7
    
    return `${dias_atuais} dias são ${a} ano(s), ${m} mes(es), ${s} semana(s) e ${d} dia(s)`
}

*/

/*
//Questão 03

const salario_total = function(horas, preco_p_hora){
    salario = horas*preco_p_hora
    return `Salário igual R$ a ${salario}`
}
*/

/*
//Questão 04

const encontra_mes = function(mes){
    switch(mes){
        case 1: return  'Janeiro';
        case 2: return  'Fevereiro';
        case 3: return  'Março';
        case 4: return  'Abril';
        case 5: return  'Maio';
        case 6: return  'Junho';
        case 7: return  'Julho';
        case 8: return  'Agosto';
        case 9: return  'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
        default: return "Número inválido"
    }
}

*/

/*
//Questão 05
const def_maior = (a,b) => a >= b? true: false
*/

/*
//Questão 06
const inverso = function(valor){
    switch(typeof(valor)){
        case typeof(true): return !(valor);
        case typeof(1): return -(valor);
        default: return `Boolenao ou números esperados mas o parâmetro é do tipo ${typeof(valor)}`
    }
}
*/

/*
//Questão 07
const logica_basica = function(number, minimo, maximo, inclusivo = false){
    if(inclusivo){
        if((number>=minimo)&&(number<=maximo)){
            return true
        }
        return false
    }
    else{
        if((number>minimo)&&(number<maximo)){
            return true
        }
        return false
    }
}
*/

/*
//Questão 08
const multiplicacao = function(a, b){
    produto = 0
    for(let i=0; i<b; i++){
        produto+=a
    }
    return produto
}
*/















