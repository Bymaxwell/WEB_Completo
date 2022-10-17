// Código não executável

//Procedural
/*processamento(valor1, valor2, valor3)

//OO
objeto = {
    valor1, 
    valor2, 
    valor3,
    processamento() {}

}

objeto.processamento()*/

//Princípios importantes:
//1.Abstração
//2. Encapsulamento
//3. Herança -> Existe o reuso de código por Composição{TEM UM} e também por Herança{É UM}
//4. Polimorfismo


//Exemplos + Revisão
//Objeto é uma coleção dinâmica de partes chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do produto'] 

console.log(produto)


const carro = {
    Modelo: 'A4',
    Valor: 89000,
    Proprietario: {
        nome: 'Raul',
        idade: 56,
        Endereco: {
            Rua: 'Generica Rua',
            Numero: 12,
            Bairro: 'Genérico Bairro'
        }
    },
    condutores: [
        {
            nome: 'Júnior', idade: 19
        }, {
            nome:'Maria', idade: 23
        }],
        calcularValorSeguro: function(){}
}

carro.Proprietario.Endereco.Numero = 1000
carro['Proprietario']['Endereco']['Rua'] = 'Rua Um pouco mais Genérica'

console.log(carro)

delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro)

