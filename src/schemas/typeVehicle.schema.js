import DataTypes from 'sequelize';
import sequelize from '../config/db.js';

const TypeVehicle = sequelize.define(
	'TypeVehicle',
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
	},
	{
		timestamps: false, // no update at, no create at
	}
);

export default TypeVehicle;
