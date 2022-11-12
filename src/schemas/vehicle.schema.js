import DataTypes from 'sequelize';
import sequelize from '../config/db.js';
import BrandVehicle from './brandVehicle.schema.js';
import ColorVehicle from './colorVehicle.schema.js';
import TypeVehicle from './typeVehicle.schema.js';
import YearVehicle from './yearVehicle.schema.js';

const Vehicle = sequelize.define(
	'Vehicle',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		plate: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		available: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: false, // no update at, no create at
	}
);
//associations
BrandVehicle.hasOne(Vehicle);
Vehicle.belongsTo(BrandVehicle);

TypeVehicle.hasOne(Vehicle);
Vehicle.belongsTo(TypeVehicle);

YearVehicle.hasOne(Vehicle);
Vehicle.belongsTo(YearVehicle);

ColorVehicle.hasOne(Vehicle);
Vehicle.belongsTo(ColorVehicle);

export default Vehicle;
