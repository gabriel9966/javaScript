class teste{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    sobrenome;
    peso;
    cor;
    altura;
    
    /*metodo*/
    setPeso(peso) {
        this.peso = peso
    }
    setCor = (cor) => (this.cor = cor)
    setAltura = function setAltura(setAltura){
        this.altura = setAltura
    }
    setSobrenome = function setSobrenome(sobrenome){
        this.sobrenome = sobrenome;
    }
    nomeCompleto(){
        console.log(this.nome,this.sobrenome)
    }
}

let gb = new teste("gabriel",45)/*
gb.setCor("preto")

gb.setAltura(1.85)
console.log(gb)*/
gb.setSobrenome("ansd")
gb.nomeCompleto()