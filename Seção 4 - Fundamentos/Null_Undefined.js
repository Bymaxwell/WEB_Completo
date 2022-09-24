//ENTENDENDO O CONCEITO DE ATRIBUIÇÃO por VALOR e por REFERÊNCIA
const a = {name: 'Teste'}

console.log(a);

const b = a; //Nesse caso a variável B aponta para o mesmo endereço que a variável A aponta
/* Atribuição por REFERÊNCIA*/

console.log(b);
b.name = 'Olá!';

console.log(a);
console.log(b);

let c = 3;
let d = c; //Por ser um tipo primitivo da linguagem essa é uma atribuição por VALOR ou CÓPIA por Valor
d++;
console.log(c, d);
//______________________________________________________________________________________________________//

let valor;
console.log(valor);
valor = null;
console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 345.78;
console.log(produto.preco);

produto.preco = undefined; //Evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;

produto.preco = null; //Sem preço . Se quiser atribuir especifcamente melhor escolher o nulo ao invés de undefined
console.log(produto.preco);
