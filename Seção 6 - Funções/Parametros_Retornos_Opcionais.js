function area(largura, altura){
    const area = largura*altura;
    if(area>20){
        console.log(`Valor acima do permitido: ${area} metros quadrados`);
    } else {
        return area;
    }
}

console.log(area(3,6));