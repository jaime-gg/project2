// IMPORT SEQUELIZE 
const Sequelize = require('sequelize');
// USE DOTENV FOR ENVIRONMENTAL VARIABLES, PROTECT PASSWORDS ETC. 
require('dotenv').config();

let sequelize;

// IN THE EVENT WE USE JAWSDB IN HEROKU 
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
