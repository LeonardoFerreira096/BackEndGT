const router = require('express').Router();

router.get('/:id/itens', (req, res) => {
    res.send('Listar carinho')
 })

 router.post('/', (req, res) => {
    res.send('criar carinho')
 })

 router.post('/item', (req, res) => {
    res.send('Adicionar itens ao carinho')
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