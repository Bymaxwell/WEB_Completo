console.log("Sentença de código");

//Comentário
/*Mais um tipo de comentário*/

console.log("Aula sobre comentários");

//Variáveis
var a = 3;
let b = 4;

console.log(a, b);

a = 300;
b = 400;
console.log(a, b);

const C = 123;
console.log(C);

//Tipagem fraca
let pqp = false; //Produto Químico Perigoso 
let texto = "Legal";
console.log(texto);
console.log(typeof texto);

//Tipo numérico
const peso1 = 1.0;
const peso2 = Number("2.0");

console.log("peso1, peso2");
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const media = (avaliacao1*peso1+avaliacao2*peso2)/(peso1+peso2);
console.log(media.toFixed(2)); //Duas casas decimais
console.log(media.toString(2)); //Converte para  uma base determinada
console.log(typeof media);




