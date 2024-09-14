const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const Port = 8000

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send({mensagem: 'Hello Wolrd'})
})

app.get("/compraerrada", (req, res) => {
    res.send({mensagem: 'compra deu errado'})
})

app.get("/compracerta", (req, res) => {
    res.send({mensagem: 'compra deu certo'})
})


app.listen(Port, () => {
    console.log(`o servidor esta rodando http://localhost:${Port}`)
});

