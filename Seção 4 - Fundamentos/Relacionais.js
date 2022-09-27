console.log('01', '1'== 1);
console.log('02', '1'===1); //Estritamente igual. Igual em tipo e em valor
console.log('03', '3' != 3);
console.log('04', '3' !== 3);//Estritamente diferente. Diferente em tipo

console.log('05', 3<2);
console.log('06', 3>2);
console.log('07', 3<= 2);
console.log('08', 3>= 2);

const data_1 = new Date(0); //Data padrão 1 de janeiro de 1970
const data_2 = new Date(0);

console.log('09', data_1 === data_2); //Compara a referência de memória, logo é Falso. Também os seria usando o operador ==
console.log('10', data_1.getTime() === data_2.getTime());

console.log('11', undefined == null);
console.log('12', undefined === null);