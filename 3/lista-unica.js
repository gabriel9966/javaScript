const cliente = [{
    nome:"osvaldo",
    idade:40,
    cpf:"23174018-12",
    email:"agohd@gdka.com",
    fones:["12730172031","1391072039"],
    dependentes: [
        {
        nome:"julio",
        parentesco:"filho",
        dataNascimento:"15/11/1998"},
        {
        nome:"lara",
        parentesco:"filha",
        dataNascimento:"13/04/2004"}
    ],
    saldo:100,
    depositar: function(valor){this.saldo = this.saldo + valor}
},{
    nome:"osvaldo",
    idade:40,
    cpf:"23174018-12",
    email:"agohd@gdka.com",
    fones:["12730172031","1391072039"],
    dependentes: [
        {
        nome:"julio",
        parentesco:"filho",
        dataNascimento:"15/11/1998"},
        {
        nome:"lara",
        parentesco:"filha",
        dataNascimento:"13/04/2004"}
]}]
//... operador de espalhamento, passa a fazer parte de um único array, spread operator
const listaDeDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]
console.log(listaDeDependentes)

console.table(listaDeDependentes)

/* JSON é um acrônimo de JavaScript Object Notation ou “notação de objeto JavaScript”.*/
   