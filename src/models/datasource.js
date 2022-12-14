const { DataSource } = require("typeorm");
const Database = require("./database");

const appDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  database: process.env.TYPEORM_DATABASE,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  timezone: process.env.TIME_ZONE
});

const database = new Database(appDataSource)
  module.exports = {
      appDataSource, database
  }  
