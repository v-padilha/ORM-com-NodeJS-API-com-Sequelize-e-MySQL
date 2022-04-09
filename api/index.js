const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

//rota
app.get('/teste', (req, res) => res
    .status(200)
    .send({mensagem: 'boas vindas à API'
})
)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

//disponibilizando app para o resto da aplicação
module.exports = app
