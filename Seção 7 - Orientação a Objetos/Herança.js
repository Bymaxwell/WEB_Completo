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
