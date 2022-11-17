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
//Questão 3

const salario_total = function(horas, preco_p_hora){
    salario = horas*preco_p_hora
    return `Salário igual R$ a ${salario}`
}
*/


//Questão 4

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

console.log(encontra_mes(01))



