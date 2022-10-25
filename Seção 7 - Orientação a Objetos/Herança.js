//HERANÇA 01
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

//HERANÇA 02
//Cadeia de protótipos (protype chain)

const avo = {atributo_1: 'A'}
const pai = {__proto__: avo, atributo_2: 'B'}
const filho = {__proto__: pai, atributo_3: 'C'}
console.log(filho.atributo_2)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelera(delta){
        if(this.velAtual+delta <= this.velMax){
            this.velAtual =+ delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const Mercedes  = {
    modelo: 'V50',
    velMax: 324, //shadowing
}

const Gol = {
    modelo: 'V80',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(Mercedes, carro)
Object.setPrototypeOf(Gol, carro)

Gol.acelera(300)
console.log(Gol.status())

Mercedes.acelera(300)
console.log(Mercedes.status())

//HERANÇA 03
const pai_2 = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha = Object.create(pai_2)
 filha.nome = 'Ana'
 console.log(filha.nome)
 console.log(filha.corCabelo)

 const filha_2 = Object.create(pai_2, {
    nome: {value: 'Bia', writable: false, enumarable: true}
})
console.log(filha_2.nome)
filha_2.nome = 'Carla'
console.log(`${filha_2.nome} tem cabelo ${filha_2.corCabelo}`)

console.log(Object.keys(filha))

for(let key in filha_2){
    filha_2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}

//HERANÇA 04

function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const objeto_1 = new MeuObjeto
const objeto_2 = new MeuObjeto

console.log(objeto_1.__proto__ === objeto_2.__proto__)
console.log(MeuObjeto.prototype === objeto_1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){console.log(`Olá, meu nome é ${this.nome}`)}

objeto_1.falar()

objeto_2.nome = 'Andressa'
objeto_2.falar()

const objeto_3 = {}
objeto_3.__proto__ = MeuObjeto.prototype

objeto_3.falar()
objeto_3.nome = 'Exemplo'
objeto_3.falar()


//HERANÇA  05
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Meu nome'.reverse())

Array.prototype.first = function(){
    return this[0]
}

vetor = [34, 1, 2, 3, 4, 5]
console.log(vetor.first())

//HERANÇA 06
function Aula(nome, video_ID){
    this.nome = nome
    this.video_ID = video_ID
}

const aula_1 = new Aula('Bem vindo', 123)
const aula_2 = new Aula('Até Breve', 456)

console.log(aula_1, aula_2)

//Simulandom o new

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj 
}

const aula_3 = novo(Aula, 'Olá, bom dia', 789)
const aula_4 = novo(Aula, 'Olá, boa noite', 946)

console.log(aula_3, aula_4)














