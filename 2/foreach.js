const notas = [10,6.5,8,7.5]

let somaDasNotas = 0
//foreach = para cada , para cada iten desse array vai ser executado , fz repetições
/*notas.forEach(nota => {
    somaDasNotas+=nota
})*/


notas.forEach(function(nota){
    somaDasNotas+=nota
})

let média = somaDasNotas/notas.length

console.log(média)
