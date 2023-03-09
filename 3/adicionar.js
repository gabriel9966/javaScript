const cliente = {
    nome:"gabriel",
    idade:17,
    email:"gskjdaj@gmai.com",
    cpf:"1281829018"
}  
console.log(cliente,"\n")
// para adicionar
cliente.fone = "999981234"


console.log(cliente)

cliente.fone = "6284018923"
console.log(cliente)
//para deleter
delete cliente.fone
console.log(cliente)

//arrow function
const soma = (num1,num2) => num1 + num2;
console.log("\n"+soma(10,2))
const beber = idade => {if(idade > 18){return true} else{return false}}
console.log(beber(19))