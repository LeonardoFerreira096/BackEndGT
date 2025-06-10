
const router = require('express').Router()
const {registrar, login} = require('../controllers/userController.js')


router.post('/register', 
    //#swagger.summary = 'Registro de novo usuario'
    //#swagger.description = 'Criar um novo usuario no sistema com nome, sobrenome, email e senha válidos'
    registrar )

router.post('/login', 
    //#swagger.summary = 'Login de usuario'
    //#swagger.description = 'Autentica um usuário com email e senha. Retorna um Token JWT que deve ser usada para acessar rotas protegidas'
    //#swagger.responses[200] = {description: 'Login efetuado com sucesso'}
    //#swagger.responses[401] = {description: 'Não atutorizado. Token de Acesso ausente'}
    login)

module.exports = router