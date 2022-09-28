function tratarErro(erro){
    //throw new Error('.......');
    //throw true;
    //throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}



function imprimirGrito(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e){
        tratarErro(e);
    } finally {
        console.log("Finalmente");
    }
  
}

const obj = {nome: 'Roberto'}
imprimirGrito(obj);