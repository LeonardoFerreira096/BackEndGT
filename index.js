const express = require('express')
const client = require ('./db.js')
const cartRouter = require('./src/routes/cartRouter.js')


const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Olá mundo')
})

app.get('/Boas-vindas', (req, res) => {
    res.send('Olá, Sejam bem vindos')
 })

app.use('/carrinho',cartRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta na url http://localhost:${port}`)
})

