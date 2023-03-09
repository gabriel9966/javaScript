/*prototype */
function cliente(nome,cpf,email,saldo){
    this.nome = nome;
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function depositar(saldo){this.saldo += saldo}
}
const gabriel = new cliente("gabriel","1894818-1","agbiudba@dgsdlna.com",0)
console.log(gabriel)

console.log(gabriel.__proto__)