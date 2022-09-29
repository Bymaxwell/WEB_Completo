// Higher Order Function

//Criar de forma literal
function fun_1(){}

//Armazenar em uma variável

const fun_2 = function(){}

//Armazenar em uma Array

const array = [function (a,b){return a+b}, fun_1, fun_2]
console.log(array[0](2,3));

//Armazenar dentro de atributos de objetos

const obj = {}
obj.falar = function(){return 'Olá!'}
console.log(obj.falar());

//Passar uma função como parâmetro
function run(fun){
    fun();
}
run(function(){console.log('Executando....')})

// Uma função pode retornar e conter uma outra função

function soma(a,b){
    return function(c){console.log(a+b+c)}
}

soma(2,3)(6);


