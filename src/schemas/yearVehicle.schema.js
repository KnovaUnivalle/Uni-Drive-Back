import DataTypes from 'sequelize';
import sequelize from '../config/db.js';

const YearVehicle = sequelize.define(
	'YearVehicle',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
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

export default YearVehicle;
