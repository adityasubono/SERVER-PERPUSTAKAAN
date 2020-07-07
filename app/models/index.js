const dbConfiq = require("../confiq/db.confiq");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfiq.DB, dbConfiq.USER, dbConfiq.PASSWORD, {
  host: dbConfiq.HOST,
  dialect: dbConfiq.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfiq.pool.max,
    min: dbConfiq.pool.min,
    acquire: dbConfiq.pool.acquire,
    idle: dbConfiq.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model")(sequelize, Sequelize);
module.exports = db;

db.petugas = require("./petugas.model")(sequelize, Sequelize);
module.exports = db;
