/* IMPORT DO SEQUELIZE */
const Sequelize = require("sequelize");

/* IMPORT DA CONEXÃO */
const connection = require("../database/database");

/*
CRIAÇÃO DO MODELO DA TABELA artesMarcial
MÉTODO: define
PARAMETROS:
1 - NOME DA TABELA  E SEUS CAMPOS
2 - JSON: REPRESENTA O CAMPO OU CAMPOS DA TABELA, SEUS TIPOS E SUAS  REGRAS.
*/
const artesMarcial = connection.define("tbl_artesMarcial", {
  estiloMarcial: {
    type: Sequelize.VARCHAR(45),
    allowNull: false,
  },
  descricao: {
    type: Sequelize.LONGTEXT,
    allowNull: false,
  },
  foto: {
    type: Sequelize.VARCHAR(90),
    allowNull: false,
  },
});

// Categoria.sync({force:true});

module.exports = artesMarcial;
