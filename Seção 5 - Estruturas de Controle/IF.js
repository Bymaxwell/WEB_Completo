//IF 1.0
function BoaNoticia(nota){
    if(nota>=7){
        console.log('Parabéns, você passou!!');
    }
}

BoaNoticia(8.9);
BoaNoticia(6.1);

function SeforVerdade(valor){
    if(valor){
        console.log('É verdade');
    }
}

SeforVerdade(null);

//IF 2.0

function teste_01(num){
    if(num>7) console.log(num);
    console.log('Fim');

}

teste_01(5);

function teste_02(num){
    if(num>7);{//Cuidado com o ; ao usar nas estruturas de controle
        console.log(num);
    }
}

teste_02(8.4);
teste_02(5.3);