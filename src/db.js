require('dotenv').config();
const {Sequelize} = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const SpentModel = require('./models/Spent.js')
const UserModel = require('./models/User.js')


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/appspents`, {
    logging: false, // set to console.log to see the raw SQL queries
    dialect: 'postgres',
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });

SpentModel(sequelize);
UserModel(sequelize);

const Spent = sequelize.models.spents;
const User = sequelize.models.users;

  // En el archivo donde defines la conexión de los modelos
User.hasMany(Spent, { foreignKey: 'userId' });
Spent.belongsTo(User, { foreignKey: 'userId' });




module.exports = {
  Spent,
  User,
  conn: sequelize
};