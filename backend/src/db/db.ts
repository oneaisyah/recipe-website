import { Sequelize } from 'sequelize';
import { Connection } from 'mysql2';

const mysql = require('mysql2');

const dbConnection: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'reciperealmdb',
});

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'reciperealmdb',
  username: 'root',
  password: 'root',
  host: 'localhost',
  define: {
    timestamps: false
  },
  dialectModule: mysql,
  dialectOptions: {
  }
});

export default sequelize;
