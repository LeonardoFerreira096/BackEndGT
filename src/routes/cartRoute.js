const { listarItens, criarCarrinho, deletarCarrinho } = require('../controllers/CartController');

const router = require('express').Router();

//listar carrinho itens
router.get('/:id/itens', listarItens)


//cria carrinho
router.post('/', criarCarrinho)

//deletar todos os itens do carrinho
router.delete('/:id/itens', deletarCarrinho)


module.exports = router;