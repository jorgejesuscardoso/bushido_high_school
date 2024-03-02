// src/config/config.js
// Dados de conexão com o banco de dados.

const config = {
  username: process.env.MYSQL_USER || 'bushido',
  password: process.env.MYSQL_PASSWORD || '83098332',
  database: process.env.MYSQL_DATABASE || 'bushido_school',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || 33060,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};