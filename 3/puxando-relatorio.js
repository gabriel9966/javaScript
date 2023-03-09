const cliente = {
/*chave =>*/ nome:/*<=*/"osvaldo",
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
}

let relatorio = "";
let relatorio2 = ""; 

// informacao é o nome da variável , para cada informacao/dado dentro do cliente ele imprime o informacao, como a informacao e o propio dado ele imprimira o dado
for(let informacao in cliente){
    // vai receber o conteúdo dela mais algo
    //se o tipo da informacao docliente for object ou function, siga em frente/continue
    if(typeof cliente[informacao] === "object" || typeof cliente[informacao] ==="function"){
        continue
    }else{
        relatorio += `${informacao}  `/*<=*/ 
        relatorio2 += `${cliente[informacao]}  `
    }
}
console.log(relatorio,"\n")
console.log(relatorio2)

let media = 7.89;
console.log(typeof(media))