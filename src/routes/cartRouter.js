const { response } = require('express');
const client = require('../../db');

const router = require('express').Router();

router.get('/:id/itens', async (req, res) => {
   const { id } = req.params
   try {
      await client.query(
         'SELECT * FROM cart_item WHERE cart_id = $1',
         [id]
      )
      res.status(200).json(result.rows)

   } catch (error) {
      console.log('Erro ao listar itens do Carrinho')
      res.status(500).json({ error: 'Erro ao buscar itens' })
   }

})

router.post('/', async (req, res) => {
   const { user_id } = req.body
   try {
      await client.query(
         'INSERT INTO cart (user_id) VALUES ($1)',
         [user_id]
      )
      res.status(201).json({criacao: 'Carrinho criado com sucesso'})
   } catch (error) {
      console.log('Erro ao criar carrinho', error)
      res.status(500).json({ erro: 'Erro ao criar carrinho', details: error.message })
   }
})


router.post('/item', async (req, res) => {
   const { cart_id, product_id, quantity } = req.body
   
   try {
      await client.query(
        `
        `
      )
   } catch (error) {
      
   }
})

router.put('/item/:id', (req, res) => {
   res.send('alterar a quantidade item carinho')
})

router.delete('/item/:id', (req, res) => {
   res.send('deletar carinho')
})

router.delete('/:id/itens', (req, res) => {
   res.send('deletar item carinho')
})

module.exports = router;