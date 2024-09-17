const Sequelize = require('sequelize')
const sequelize = new Sequelize('Cosmeticos', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
})

const Produtos = sequelize.define('Produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.STRING(255) // com limite de tamanho
    },
    preco: {
        type: Sequelize.FLOAT(10, 2)
    },
    descricao: {
        type: Sequelize.TEXT // sem limite de tamanho
    },
    imagemUrl: {
        type: Sequelize.TEXT
    }
})

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

    // const produtos = Produtos.findAll()
    // .then(response => {
    //     console.log(response)
    // })
    // .catch(err => {
    //     console.log("deu erro", err)
    // })

module.exports = Produtos;
    

// criação com o proprio sequelize
// Produtos.create({
//     titulo: 'Hidratante',
//     preco: 10.99,
//     descricao: 'Hidrata sua pele contra o sol e espinhas',
//     imagemUrl: 'https://www.drogariaminasbrasil.com.br/media/product/f23/hidratante-corporal-nivea-milk-hidratacao-profunda-200ml-b90.jpg',
//     quantidade: 1,
//     createdAt: NOW(),
//     updatedAt: NOW()
// })

// insere um produto no banco de dados

// INSERT INTO Produtos (titulo, preco, descricao, imagemUrl, createdAt, updatedAt)VALUES ('Hidratante', 10.99, 'Hidrata sua pele contra o sol e espinhas', 'https://www.drogariaminasbrasil.com.br/media/product/f23/hidratante-corporal-nivea-milk-hidratacao-profunda-200ml-b90.jpg', NOW(), NOW());

// Produtos.sync({force: true}).then(() => {
//     console.log('Tabela produtos foi criada!');
// }).catch(error => {
//     console.error('Erro ao criar tabela produtos:', error);
// }); 
