import DataTypes from 'sequelize';
import sequelize from '../config/db.js';
import Bidder from './bidder.schema.js';
import Vehicle from './vehicle.schema.js';

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
			type: DataTypes.SMALLINT,
			allowNull: false,
		},
		rate: {
			type: DataTypes.INTEGER,
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

Vehicle.hasOne(Trip);
Trip.belongsTo(Vehicle);
Bidder.hasOne(Trip);
Trip.belongsTo(Bidder);

export default Trip;
