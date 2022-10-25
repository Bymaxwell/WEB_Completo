const pilotos = ['Vettel', 'Alonso',  'Raikknem', 'Massa', 'Hamilton', 'Rubinho']

pilotos.pop() //Rubinho quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)  //Vettel quebrou o carro 

pilotos.unshift('Rubinho') //Rubinho volta e alcança o primeiro lugar
console.log(pilotos)

//Adicionar com splice
pilotos.splice(1, 0, 'Airton Senna', 'Bottas')
console.log(pilotos)

//Remover com o splice
pilotos.splice(3, 1) //Alonso quebrou o carro
console.log(pilotos)

//Novo array com slice
const pilotos_2 = pilotos.slice(2)
console.log(pilotos_2)

const pilotos_3 = pilotos.slice(2, 4) //Pega os elementos de 2 até 3. O 4 não entra
console.log(pilotos_3)

