const nome = "Gabriel"
console.log("Quantidade de caracteres no nome :",nome.length)
// String é um array , começa em 0, pode ser manipulado
console.log(nome.charAt(3))//charAt diz a letra que está nessa posição
console.log(nome[1])//também funciona

console.log(nome.indexOf("r"))//Diz a posição da letra , retorna a primeira posição que estiver essa letra 

console.log(nome.toUpperCase())//deixa tudo maiúsculo
console.log(nome.toLowerCase())//deixa tudo minúsculo
//permite que façamos a extração de parte de uma string
let frase= "Mergulhando em tecnologia."
console.log(frase.substring(0,11)) // Mergulhando

// slice() Podemos utilizar também o método slice(), que usamos com arrays. Ele é similar ao substring() e retornará parte de uma string, desde que passemos nos parâmetros o índice de início e de fim. 


let nome1 = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome1));
//Com a função replace() temos a possibilidade de substituir parte de uma string por outra. Essa função recebe como parâmetros duas informações: a string que você quer substituir e a string que será colocada no lugar. Olhe o exemplo abaixo, em que precisamos substituir a string nomeusuario no texto padrão de comunicacao.