console.log(typeof console);

const Obj_1 = {};
Obj_1.nome = 'Hexágono';

console.log(Obj_1.nome);


function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Executando...')
    }
}

const Obj_2 = new Obj('Cadeira');
console.log(Obj_2.nome);
Obj_2.exec();