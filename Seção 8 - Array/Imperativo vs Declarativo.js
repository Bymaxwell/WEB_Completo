//CALCULAR AS MÉDIAS das Notas dos alunos
const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//ABORDAGEM IMPERATIVA
let total_01 = 0;
for(let i=0; i<alunos.length; i++){
    total_01 += alunos[i].nota
}

console.log(total_01/alunos.length)

//ABORDAGEM DECLARATIVA

const getNota = aluno => aluno.nota
const media = (acumulador, atual) => acumulador+atual
const media_notas = (alunos.map(getNota).reduce(media))/alunos.length

console.log(media_notas)


