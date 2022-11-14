const Escola = [
    {nome: 'Turma M1', alunos: [{nome: 'Gustavo', nota: 8.1}, {nome: 'Ana', nota: 9.3}]},
    {nome: 'Turma M2', alunos: [{nome: 'Rebeca', nota: 8.9}, {nome: 'Roberto', nota: 7.3}]}
]

const getNotaAluno = aluno => aluno.nota
const doConcat = (anterior, atual) => anterior.concat(atual)
const getAluno = Turma => Turma.alunos

const Notas = Escola.map(getAluno).reduce(doConcat).map(getNotaAluno)

console.log(Notas)
