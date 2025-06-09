const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens } = require('../controllers/cartItemController');
const authMiddleware = require('../middleware/authMiddleware.js')


//insere itens no carrinho
router.post('/', authMiddleware, inserirItens)

//Alterar a quantidade item carrinho
router.put('/:id', authMiddleware, alterarItens)

//deleta item
router.delete('/:id', authMiddleware, deletarItens)


module.exports = router