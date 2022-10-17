//Usando Notação Literal
const objeto_1 = {}
console.log(objeto_1)

//Objeto em JS
console.log(typeof Object, typeof new Object)
const objeto_2 = new Object
console.log(objeto_2)

//Funções construtoras
function Produto(nome, valor, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => valor*(1-desconto)

}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3499.90, 0.25)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())


//Função Factory
function criarFuncionario(nome, salario, faltas){
    return {
        nome, 
        salario,
        faltas,
        getSalario() {
            return((salario/30)*(30-faltas))
        }
    }
}


const f1 = criarFuncionario('João', 3000, 10)
console.log(f1.getSalario())
f1.nome = 'Maria'
console.log(f1)



//Object.create
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha)

//Função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"Info": "Sou um JSON"}')
console.log(fromJSON.Info)