const nomes = ['Ana','Marcos','Maria','Mauro']
const notas = [7,4.5,8,7.5]
//const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5)
//também funciona
//cria um novo array com todo os elementos que pasaram no teste
const reprovados = nomes.filter((_,indice) => notas[indice] < 5)

console.log(`Reprovados :${reprovados}`)

