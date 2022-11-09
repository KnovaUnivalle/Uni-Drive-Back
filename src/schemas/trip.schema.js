import DataTypes from 'sequelize';
import sequelize from '../config/db.js';

const Trip = sequelize.define(
	'Trip',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		day: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		rate: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		toUniversity: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		meetPoint: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false, // no update at, no create at
	}
);

export default Trip;
