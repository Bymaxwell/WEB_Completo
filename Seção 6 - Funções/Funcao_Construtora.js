function Carro(velMax = 200, delta = 5){
    //atributo privado
    let velocidade_atual = 0;

    //metodo publico
    this.acelerar = function(){
        if(velocidade_atual+delta <= velMax){
            velocidade_atual += delta
        }
        else {
            velocidade_atual = velMax
        }
    
    this.getVelocidadeAtual = function(){
        return velocidade_atual;
    }
    }
}

const uno = new Carro
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const Ferrari = new Carro(350, 20);
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual());