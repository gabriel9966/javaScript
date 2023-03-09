const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJAVA = [6,5,8,9,5,6]
const salaPYTHON = [7,3.5,8,9.5]

function mediaArray (nome){
    let quantidade = nome.length
    let a = 0 
    let total = 0
    let i = 0
    while(a < quantidade){
        a++
        console.log('Valor de total :',total)
        
        total = total + nome[i] 
        i = i + 1
        console.log('Valor do i :',i)
    }
    console.log('Essa é a sala :',nome)
    console.log('Esse é o total :',total)
    console.log('Essa é a quantidade :',quantidade)
    let media = total / quantidade
    console.log('Essa é a média :',media)
}
mediaArray(salaJS)


