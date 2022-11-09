import DataTypes from 'sequelize';
import sequelize from '../config/db.js';

const ColorVehicle = sequelize.define(
	'ColorVehicle',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false, // no update at, no create at
	}
);

export default ColorVehicle;
