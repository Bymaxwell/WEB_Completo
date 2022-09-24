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
console.log(local); //Retorna um erro uma vez que a variável "local" é de escopo local dentro da função "teste"
//Dessa forma a variável do tipo VAR só tem dois escopos: ou local ou global