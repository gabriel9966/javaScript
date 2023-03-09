/*cliente*/
class cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(saldo){
        this.saldo += saldo
        console.log("foi depositdo o valor de :",saldo)
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}
console.log("Oi")
const gb = new cliente("gabriel","absoib@sbda.com","98498498-8",100)
gb.depositar(60)
gb.exibirSaldo()