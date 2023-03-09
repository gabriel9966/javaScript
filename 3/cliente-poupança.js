function cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function depositar(saldo){this.saldo += saldo}
}
const gabriel = new cliente("gabriel","1894818-1","agbiudba@dgsdlna.com",0)
//console.log(gabriel)
function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    /*chama o construtor do cliente*/
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}
clientePoupanca.prototype.depositarPoup = function depositarPoup(saldo){this.saldoPoup += saldo}
const andre = new clientePoupanca("andre","4984891-8","agbdiab@baisdg.com",0,0)
andre.depositarPoup(750)
andre.depositar(150)


console.log(andre)

