const cliente = {
    nome:"osvaldo",
    idade:40,
    cpf:"23174018-12",
    email:"agohd@gdka.com",
    fones:["12730172031","1391072039"]
}

cliente.dependentes = {
    nome:"julio",
    parentesco:"filha",
    dataNascimento:"15/18/1998"

}
console.log(cliente);
cliente.dependentes.nome = "nélio"
console.log(cliente)
