{
    {
        {
            {
                {
                    var sera = 'Será???'
                }
            }
        }
    }
}
//A variável do tipo VAR ficará visível até pelos códigos que estejam fora do bloco onde ela está contida
console.log(sera);

function teste()  {
    var local = 123;
}

teste();
// console.log(local); Retorna um erro uma vez que a variável "local" é de escopo local dentro da função "teste"
//Dessa forma a variável do tipo VAR só tem dois escopos: ou local ou global

//EXEMPLO com var

var numero = 1;
{
    var numero = 2;
    console.log("dentro = ", numero); 
}

console.log("fora = ", numero);

//EXEMPLO com let

let numero_1 = 1;
{
    let numero_1 = 2;
    console.log("dentro = ", numero_1); 
}

console.log("fora = ", numero_1);

//O let te escopo no local em que está inserido, se ali não for conter a variável, ele procura em um escopo acima

//VAR EM LOOP

for (var i=0; i<10; i++){
    console.log(i);
}

console.log(i);

const funcs = [];
for (var k=0; k<10; k++){
    funcs.push(function(){
        console.log(k);
    })
}

funcs[2]();
funcs[8]();




//LET EM LOOP

for(let j=0; j<10; j++){
    console.log(j);
}

//console.log(j);

const funcs_2 = [];
for(let m=0; m<10; m++){
    funcs_2.push(function(){
        console.log(m);
    })
}

funcs_2[2]();
funcs_2[8]();

