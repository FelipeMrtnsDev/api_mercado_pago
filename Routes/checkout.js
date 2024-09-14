const express = require("express")
const router = express.Router()
const { MercadoPagoConfig, Preference } = require("mercadopago")

// rota pra caso a compra de errado
router.get("/compraerrada", (req, res) => {
    res.send({mensagem: 'compra deu errado'})
})

// rota pra caso a compra de certo
router.get("/compracerta", (req, res) => {
    res.send({mensagem: 'compra deu certo'})
})

//rota de pagamento, integrando api do mercado pago
router.get("/payment", async (req, res) => {
    const client = new MercadoPagoConfig({  accessToken: 'TEST-7021098593316224-091317-94654492a9962f618f801625a118e434-1985485922', sandbox: true });
    const preference = new Preference(client);
    
    // trocar por informações do banco de dados
    const body = {
        items: [
            {
                id: '1',
                title: 'Camisa',
                quantity: 1,
                currency_id: 'BRL',
                unit_price: 259.99,
            },
            {
                id: 1,
                title: 'Calça',
                quantity: 3,
                currency_id: 'BRL',
                unit_price: 359.99,
            }
        ],
        back_urls: {
            success: 'http://localhost:8000/checkout/compracerta',
            failure: 'http://localhost:8000/checkout/compraerrada',
            pending: 'http://localhost:8000/checkout/compraerrada',
        },
        auto_return: 'all',
        payer: {
            name: 'Felipe',
            email: 'felipejdijd@gmail.com',
        }
    };
    //manda o link para a pessoa comprar
    preference.create({ body })
    .then(response => {
        res.status(200).json(({ link: response.init_point }))
    })
    .catch(error => {
        res.send({error_msg: 'deu errado'})
    });
});

module.exports = router