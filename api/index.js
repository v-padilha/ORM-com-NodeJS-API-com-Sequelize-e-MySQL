//subindo o servidor e iniciando a aplicação

const express = require('express')
const routes = require('./routes')

const app = express()

const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

//disponibilizando app para o resto da aplicação
module.exports = app
