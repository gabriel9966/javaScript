const carros = {
    Marca:"porsche",
    Modelo:"911",
    Ano:2020,
    Cor:"vermelho"
}
console.log(carros.Marca)
console.log(carros.Modelo)
console.log(carros.Ano)
console.log(carros.Cor)

const motos ={
    motor:null,
    cor:null,
    Ano:null
}
motos.motor = "3cilindros";
motos.cor = "vermelho";
motos.Ano = 2020;

console.log("\n"+`O motor é ${motos.motor}`);
console.log(`A cor é  ${motos.cor}`);
console.log(`O ano é  ${motos.Ano}`);