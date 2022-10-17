import Sequelize from 'sequelize';
import './env.js';

const sequelize = new Sequelize(process.env.POSTGRES_URL);

export default sequelize;
