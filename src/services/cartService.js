const {listarCarrinhoRepository, criarCarrinhoRepository, limparCarrinhoRepository } = require("../repositories/cartRepository");

async function listarCarrinhoService(user_id) {
    return await listarCarrinhoRepository(cart_id)
}


async function criarCarrinhoService(cart_id) {
    return await criarCarrinhoRepository(cart_id)
}

async function limparCarrinhoService(cart_id) {
    return await limparCarrinhoRepository(cart_id)
}



module.exports = {criarCarrinhoService, listarCarrinhoService, limparCarrinhoService}