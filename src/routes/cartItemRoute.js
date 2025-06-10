const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens } = require('../controllers/cartItemController');
const authMiddleware = require('../middleware/authMiddleware.js')


//insere itens no carrinho
router.post('/', authMiddleware,
    //# swagger.summary = 'Inseri itens no carrinho'
    inserirItens)

//Alterar a quantidade item carrinho
router.put('/:id', authMiddleware, 
    //# swagger.summary = 'Altera a quantidade de itens do Carrinho'
    alterarItens)

//deleta item
router.delete('/:id', authMiddleware, 
    //# swagger.summary = 'deleta itens do Carrinho'
    deletarItens)


module.exports = router