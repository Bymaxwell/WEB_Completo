console.log('a = ', a); 
//Não dá erro, uma vez que a a variável do tipo var sofre hoisting, fazendo que com o valor seja undefined antes da sua primeira atribuição
var a = 30;

console.log('a = ', a);

//console.log('b = ', b);
// Com let isso não acontece e temos um erro de compilação

let b = 25;

console.log('b = ', b);