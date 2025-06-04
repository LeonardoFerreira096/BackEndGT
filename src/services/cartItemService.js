async function inserirItensService() {
    
    if (!Number.isInteger(cart_id) || !Number.isInteger(product_id) || !Number.isInteger(quantity)) {
        return res.status(400).json({ error: "Erro no corpo da requisição" })
    }
}


async function AlterarItensService() {
    
    if (!Number.isInteger(quantity) || quantity < 1) {
        return res.status(400).json({ error: "quantidade inválida. Deve ser número inteiro maior que 0" })
    }
    client.query(
        `INSERT INTO cart_item (cart_id, product_id, quantity)
             VALUES ($1, $2, $3) RETURNING *`, [cart_id, product_id, quantity]
    )
}


async function DeletarItensService() {
    
}


module.exports = {
    inserirItensService,
    AlterarItensService,
    DeletarItensService
}