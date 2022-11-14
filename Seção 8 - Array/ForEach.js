//ForEach 1
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})
console.log('\n')
aprovados.forEach((nome, indice) => console.log(`${indice+1}) ${nome}`))

//ForEach 2

Array.prototype.ForEach = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this)
    }

}
console.log('\n')
aprovados.ForEach((nome, indice) => console.log(`${indice+1}) ${nome}`))
