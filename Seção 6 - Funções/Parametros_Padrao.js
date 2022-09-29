//Estratégia 1 para atribuir valores padrão para os parâmetros
function soma(a, b , c){
    a = a || 1;
    b = b || 2;
    c = c || 3;
    return a+b+c;
}

console.log(soma());
console.log(soma(3));
console.log(soma(2,3))

//Estratégia 2, 3, 4 para atribuir valores padrão para os parâmetros

function soma_2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}

console.log(soma_2(), soma_2(3), soma_2(1,2,3), soma_2(0,0,0,))

//Usando o valor padrão do es2015

function soma_3(a=1, b=1, c=1){
    return a+b+c
}

console.log(soma_3(), soma_3(3), soma_3(1,2,3), soma_3(0,0,0,))

