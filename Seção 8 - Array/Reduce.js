//REDUCE 01 - Conhecendo o Reduce
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

//REDUCE 02 - Desafios

//Desafio 01: Todos os alunos são bolsistas?
const transform_T_F = elemento => elemento.bolsista? 1: 0
const multiply_bolsista = (acumulador, atual) => acumulador*atual
const todos_bolsistas = alunos.map(transform_T_F).reduce(multiply_bolsista)

if(todos_bolsistas){console.log('Todos são bolsistas')}
else {console.log("Nem todos são bolsistas")}

//Desafio 02: Algum aluno é bolsista?
const soma_bolsista = (acumulador, atual) => acumulador+atual
const existe_bolsista = alunos.map(transform_T_F).reduce(soma_bolsista)

if(existe_bolsista){console.log("Existe pelo menos um aluno bolsista")}
else {console.log("Não existe alunos bolsistas")}


//REDUCE 03 - Implemento minha própria função Reduce
Array.prototype.REDUCE_MAX = function(callback, valor_inicial = 0){

    if(valor_inicial){
        retorno = callback(valor_inicial, this[0])
        for(let i=1; i<this.length; i++){
            retorno = callback(retorno, this[i])

        }
    }
   
    else{
    retorno = callback(this[0], this[1])
    for(let i=2; i<this.length; i++){
        retorno = callback(retorno, this[i])
    }
}

return retorno
}

const existe_bolsista_02 = alunos.map(transform_T_F).REDUCE_MAX(soma_bolsista)

if(existe_bolsista_02){console.log("Existe pelo menos um aluno bolsista")}
else {console.log("Não existe alunos bolsistas")}
