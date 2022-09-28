const numbers = [1,2,3,4,5,6,7,8,9,10]

for(let i in numbers){
    if(i==5) break;
    console.log(`${i} = ${numbers[i]}`);
}

for(let x in numbers){
    if(x==5) continue;
    console.log(`${x} = ${numbers[x]}`);
}

externo: for(let a in numbers){
    for(let b in numbers){
        if(a==2 && b==3) break externo;
        console.log(`PAR ${a}, ${b}`);
         
    }
}
