function compras(trab_1, trab_2){
    const comprar_sorvete = trab_1 || trab_2;
    const comprar_TV_50 = trab_1 && trab_2;
    const comprar_TV_32 = ((!trab_1&&trab_2)||(trab_1&&!trab_2));
    const manter_saudavel = !comprar_sorvete;

    return {comprar_sorvete, comprar_TV_50, comprar_TV_32, manter_saudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));