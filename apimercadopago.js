const { MercadoPagoConfig, Preference } = require("mercadopago")

const client = new MercadoPagoConfig({  accessToken: 'TEST-7021098593316224-091317-94654492a9962f618f801625a118e434-1985485922', sandbox: true });
const preference = new Preference(client);

const body = {
	"items": [
        {
            "id": "1",
            "title": "Camisa",
            "quantity": 1,
            "currency_id": "BRL",
            "unit_price": 259.99
        },
        {
            "id": "1",
            "title": "Calça",
            "quantity": 3,
            "currency_id": "BRL",
            "unit_price": 359.99
        }
    ],
    "back_urls": {
        "success": 'http://localhost:8000/compracerta',
        "failure": 'http://localhost:8000/compraerrada',
        "pending": 'http://localhost:8000/compraerrada',
    },
    "auto_return": "all",
    "payer": {
        name: 'Felipe',
        email: 'felipejdijd@gmail.com',
    }
};

const response = preference.create({ body })
.then(console.log).catch(console.log);
