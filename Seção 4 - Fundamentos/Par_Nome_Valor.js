const saudacao = 'Olá!'; //Contexto léxico 1

function exec(){
    const saudacao = 'Hello Hello!';
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 10,
    peso: 90,
    endereco:  {
        logradouro: 'Rua Exemplo',
        numero: 12
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);