/*{} = objeto , [] = array  */
const cliente = {
    nome:"osvaldo",
    idade:40,
    cpf:"23174018-12",
    email:"agohd@gdka.com",
    fones:["12730172031","1391072039"],
    dependentes: [{
    nome:"julio",
    parentesco:"filha",
    dataNascimento:"15/11/1998"}]
}
console.log(cliente.dependentes)
cliente.dependentes.push({
    nome:"sonia",
    parentesco:"filha",
    dataNascimento:"06/07/2003"
})
console.log(cliente+" \nteste\n")

const filhaMaisNova = cliente.dependentes.filter(variavel => variavel.dataNascimento==="06/07/2003")
/*cai retornar o dependente com a data de nascimento igaul a "06/07/2003", o filter sempre retorna um  array */ 
console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)


const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1000,500,234,546,627]
const numerosMaiores = numeros.filter(vari => vari > 10 )
console.log(numerosMaiores)