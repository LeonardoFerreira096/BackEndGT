const jwt = require("jsonwebtoken")

const SECRET = process.env.JWT_SECRET

function autentificarToken(req, res, next) {
    const authHeader = req.authHeaders['authorization']
    const token = authHeader && authHeader.split('')[1]
    if (toke === null) {
        return res.status(401).json({ message: "Token não encontrado" })
    }

    jwt.verify(token, SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token Invalido" })
        }
        req.user = user
        next()
    })
}

module.exports = autentificarToken
