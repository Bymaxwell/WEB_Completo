let dobro = function(a){
    return 2*a
}

dobro = (a) => {return 2*a}

dobro = (a) => 2*a

console.log(dobro(30));

let ola = function (){
    return 'Olá, Bom dia!'
}
console.log(ola());

ola = () => 'Olá, Boa Tarde!'

console.log(ola());

//ARROW 2
function Pessoa(){
    this.idade = 0;

    setInterval(()=> {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

//new Pessoa

//ARROW 3

let comparaThis = function(parametro){
    console.log(this === parametro);
}

const obj = {}
comparaThis = comparaThis.bind(obj)
comparaThis(obj)




let comparaArrow = (parameter) => console.log(this === parameter);

comparaArrow = comparaThis.bind(obj)
comparaArrow(obj)

comparaArrow(module.exports)
comparaArrow(obj)
comparaArrow(global)








