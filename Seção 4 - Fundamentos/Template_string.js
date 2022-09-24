const nome = "Rebeca";
const concatenacao = "Ola "+nome+"!";
const template = `
        Olá
        ${nome}!`

console.log(nome);
console.log(concatenacao);
console.log(template);


//expressões
console.log(`Soma: ${1+1}`);

const up = texto => texto.toUpperCase();

console.log(`Maisúsculo: ${up("olá, mundo!")}`);