/*IMPORT DO SEQUELIZE*/
const Sequelize = require('sequelize');


const connection = new Sequelize(
    'api_martialArts_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;