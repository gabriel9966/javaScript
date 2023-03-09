//dividindo arrays
const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(letras.length)
const letras1 = letras.slice(0,letras.length/2)
const letras2 = letras.slice(letras.length/2)

console.log(`letra 1 :${letras1}`)

console.log(`letras 2 :${letras2}`)

//slice divide o array (começo , fim)