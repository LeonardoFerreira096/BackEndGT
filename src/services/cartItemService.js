const { cartCheck } = require("../repositories/cartRepository")
const{inserirItensRepository, alterarItensRepository, deletarItensRepository} = require("../repositories/cartItemRepository")

async function inserirItensService(cart_id, product_id, quantity) {
    const carrinhoCheck = await cartCheck(cart_id)
    if (!carrinhoCheck) {
        const erro = new Error("Carrinho nao encontrado")
        erro.status = 404;
        throw error;
    }

    if (!Number.isInteger(cart_id) || !Number.isInteger(product_id) || !Number.isInteger(quantity)) {
        const erro = new Error("Erro no corpo da requisição")
        erro.status = 400;
        throw error;
    }
    return await inserirItensRepository(cart_id, product_id, quantity )

}

async function alterarItensService(id,quantity) {

    if (!Number.isInteger(quantity) || quantity < 1) {
        const erro = new Error("Carrinho nao quantidade inválida. Deve ser número inteiro maior que 0")
        erro.status = 400;
        throw error;
    }
    
    const result = alterarItensRepository(id,quantity)

    if (!result) {
        const erro = new Error("Item não encontrado para alterar")
        erro.status = 404;
        throw error;
    }
    return result
}



async function deletarItensService(id) {
    return await deletarItensRepository(id)
}

module.exports = {
    inserirItensService,
    alterarItensService,
    deletarItensService
}