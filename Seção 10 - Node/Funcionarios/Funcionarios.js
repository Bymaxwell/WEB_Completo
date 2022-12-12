const url = "http://files.cod3r.com.br/curso-js/funcionarios.json" 
const axios = require('axios')

//USAREMOS O FILTER EM PAIS E SEXO
function chineses(objeto){
    if(objeto.pais == 'China'){
        return true
    }
    return false
} 

function mulheres(objeto){
    if(objeto.genero == 'F'){
        return true
    }
    return false
}


axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionarios_c_f = funcionarios.filter(chineses).filter(mulheres)
    let salario_menor = funcionarios_c_f[0].salario
    let pessoa = 0
    for(let i=1; i<funcionarios_c_f.length; i++){
        //SUPOMOS QUE NÃO EXISTEM SALARIOS IDENTICOS 
        if(funcionarios_c_f[i].salario < salario_menor){
            salario_menor = funcionarios_c_f[i].salario
            pessoa = i
        }
    }
    console.log(pessoa)

 
    console.log("A mulher chinesa com menor salário é: ")
    console.log(funcionarios_c_f[pessoa])
})



