class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }

}

const Pessoa_1 = new Pessoa('João');
Pessoa_1.falar();

const pessoa = (nome) => {
    return {
    falar: () => console.log(`Olá, meu nome é ${nome}`)} 
    }

const Pessoa_2 = pessoa('João');
Pessoa_2.falar()


//Funcao Construtora

function Pessoa_function(nome){
    this.nome = nome;
    this.falar = function () {console.log(`Olá, meu nome é ${this.nome}`)}
}

const Pessoa_3 = new Pessoa_function('Maria');
Pessoa_3.falar();