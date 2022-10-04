const soma = function(x,y){
    return x+y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}
imprimirResultado(5,4)
imprimirResultado(5,4, (a,b)=>a-b)