//IF E ELSE 1.0
const imprimirResultado = function(nota){
    let number = 1;
    if(typeof nota == typeof number){
    if(nota>=7){
        console.log('Aprovado com '+nota);
    }
    else{
        console.log('Reprovado com ', nota);
    }
}
else{
    console.log('Entrava inválida!');
}
}

imprimirResultado(9);
imprimirResultado(4.5);	
imprimirResultado('Olá!');

//IF E ELSE 2.0

Number.prototype.entre = function(inicio, fim){
    return this>=inicio && this<=fim;
}

const imprimir_Resultado = function(nota){
    if(nota.entre(9, 10)) console.log("Máxima Honra!");
    else if(nota.entre(7, 8.999)) console.log('Aprovado!');
    else if(nota.entre(4, 6.999)) console.log('Reprovado!');
    else if(nota.entre(0, 3.999)) console.log('INAPTO !');
    else console.log('Nota inválida');

    console.log('FIM');
}

imprimir_Resultado(10);
imprimir_Resultado(5.7);
imprimir_Resultado(1);