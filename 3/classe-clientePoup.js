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

class clientePoup extends cliente {

    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(saldoPoup){
        this.saldoPoup += saldoPoup
        console.log("foi depositdo o valor de :",saldoPoup," na poupança")
    }
    exibirSaldoPoup(){
        console.log(this.saldoPoup)
    }

}

const nn = new clientePoup("nn","nnn@ada.com","4947696194-9",100,100)
nn.exibirSaldoPoup()
nn.depositarPoup(89)
nn.exibirSaldoPoup()
console.log("\n",nn)