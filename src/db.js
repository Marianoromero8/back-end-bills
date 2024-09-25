import dotenv from 'dotenv'
dotenv.config();
import {Sequelize} from 'sequelize';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
import SpentModel from './models/Spent.js'
import UserModel from './models/User.js'


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/spents`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });
  const basename = path.basename(__filename);
  
  const modelDefiners = [];
  
  // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
  fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });
  
  // Injectamos la conexion (sequelize) a todos los modelos
  modelDefiners.forEach(model => model(sequelize));
  // Capitalizamos los nombres de los modelos ie: product => Product
  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
  sequelize.models = Object.fromEntries(capsEntries);

  SpentModel(sequelize);
  UserModel(sequelize);

  const Spent = sequelize.models.spent;
  const User = sequelize.models.user;

  // En el archivo donde defines la conexión de los modelos
User.hasMany(Spent, { foreignKey: 'userId' });
Spent.belongsTo(User, { foreignKey: 'userId' });




module.exports = sequelize;