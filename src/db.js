require('dotenv').config();
const {Sequelize} = require('sequelize');
const { DB_URL } = process.env;
const SpentModel = require('./models/Spent.js')
const UserModel = require('./models/User.js')

const sequelize = new Sequelize(DB_URL, {
    dialect: 'postgres',
    logging: false, // set to console.log to see the raw SQL queries
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // A veces es necesario para Render y otros servicios de hosting
    }
    }
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