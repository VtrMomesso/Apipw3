/*IMPORT DO SEQUELIZE*/
const Sequelize = require('sequelize');


const connection = new Sequelize(
    'api_martialArts_bd',
    'root',
    '',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);

module.exports = connection;