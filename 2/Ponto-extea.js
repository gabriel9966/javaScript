const notas = [10,9,8,7,6]

const notasAtualizdas = notas.map( nota => nota == 10 ? nota : ++nota)
                                                        //primeiro adiciona depois retorna
//O map retorna algo , uma array atualizada, tem que salvar em uma nova variavel

console.log(notasAtualizdas)