const cliente = {
    nome:"gabriel",
    idade:17,
    email:"gskjdaj@gmai.com",
    cpf:"1281829018"
}               //0        1      2      3     
const chaves = ["nome","idade","email","cpf"]
//tem que ser igual as chaves do objeto

//console.log(cliente[chaves[0]])
//console.log(chaves[0])

chaves.forEach(info=>console.log(cliente[info]))