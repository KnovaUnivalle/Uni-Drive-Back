import Sequelize from 'sequelize';
import './env.js';

//POSTGRES_URL is credentials to access to the data base
const sequelize = new Sequelize(process.env.POSTGRES_URL);

export default sequelize;
