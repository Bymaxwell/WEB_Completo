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


//Questão 3

const salario_total = function(horas, preco_p_hora){
    salario = horas*preco_p_hora
    return `Salário igual R$ a ${salario}`
}

console.log(salario_total(10, 4))

