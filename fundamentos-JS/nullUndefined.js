let valor  // nao inicializada
console.log(valor)



valor =  null //ausensia  de  valor
console.log(valor)

// console.log(valor.toString()) // Erro!


const produto = {}
console.log(produto.preco)
console.log(produto)


produto.preço = 3.50
console.log(produto)


produto.preço = undefined // evite atribuir undefined
console.log(produto.preço)
// delete produto.preco
console.log(produto)


produto.preço = null //sem preço
console.log(!!!produto.preço)
console.log(produto)
