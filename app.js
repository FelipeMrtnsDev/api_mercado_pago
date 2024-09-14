const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const checkout = require("./Routes/checkout")

// usando BodyParser
app.use(bodyParser.json())

// usando rota de checkout de checkout
app.use("/checkout", checkout)

const Port = 8000
app.listen(Port, () => {
    console.log(`o servidor esta rodando http://localhost:${Port}`)
});

