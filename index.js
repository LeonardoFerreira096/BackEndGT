const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const express = require('express');
const cartRoute = require('./src/routes/cartRoute.js')
const cartItemRoute = require('./src/routes/cartItemRoute.js')
const userRoute = require('./src/routes/userRoute.js')
const cors = require('cors')
require('dotenv').config()


const app = express();
const port = process.env.PORT;

app.use(cors({
   origin: "http://localhost:5173",
})
)

app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (req, res) => {
   //#swagger.tags = ['documentacao']
   //#swagger.summary = 'Redireciona para documentacao API'
   res.redirect('/docs')
})

app.use('/v1/cart',
   //#swagger.tags = ['carrinho']
   //#swagger.summary = 'Redireciona para documentacao API'
   cartRoute)
app.use('/v1/item',
   //#swagger.tags = ['Carrinho-Item']
   //#swagger.summary = 'Redireciona para documentacao API'
   cartItemRoute)
app.use('/v1/user',
   //#swagger.tags = ['Usuario']
   //#swagger.summary = 'Redireciona para documentacao API'
   userRoute)

app.listen(port, () => {
   console.log(`API documentation: http://localhost:${port}`)
})