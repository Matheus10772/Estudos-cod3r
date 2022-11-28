//A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada 
//quando tal propriedade é acessada.

const sequence = {
    _id: 0,
    get id() {return this._id += 1}
}

let produtos = [];

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id;
    produtos[produto.id] = produto;
    return produto;
}

function getProdutos () {
    return Object.values(produtos);
}

function getProduto(id) {
    return produtos[id] || {};
}

module.exports = {salvarProduto, getProdutos, getProduto};