const pessoa = {
    saudacao: 'Bom dia!',
    falar(){console.log(this.saudacao)}
}

pessoa.falar()
const falar = pessoa.falar;
falar(); //Conflito entre programação funcional e Orientação a Objetos

const falarDepessoa = pessoa.falar.bind(pessoa)
falarDepessoa();

//BIND 2
const self = this;
function Pessoa(){
    self.idade = 0;

    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa