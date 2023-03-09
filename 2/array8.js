const alunos = ['gabriel','paulo','luiz','lara']
const media = [10,6,4,8]
                        //0     1
let lista2dimensão = [alunos,media]

//console.log(`${lista2dimensão[0][0]} sua média é :${lista2dimensão[1][0]}`)
//lista2dimensão[0] = alternativas dentro da lista2dimensão
// includes -> boolean
// indexof-> número
const ExibeNomeEnota = (nomeDoAluno) =>{
    //includes faz uma busca pelo array inteiro e ve se o parametro é igual
    if(lista2dimensão[0].includes(nomeDoAluno)){
        //                          o index of traz o número do índice
        let indice = lista2dimensão[0].indexOf(nomeDoAluno)
        //                  [0]  [2]
        return lista2dimensão[0][indice] + ' A sua média é:'+ lista2dimensão[1][indice]
    }else{
        return 'O aluno não está cadastrado'
    }
}

console.log(ExibeNomeEnota('luiz'))