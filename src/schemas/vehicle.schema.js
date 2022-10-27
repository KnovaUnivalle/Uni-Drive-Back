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
Vehicle.hasOne(BrandVehicle);
BrandVehicle.belongsTo(Vehicle);

Vehicle.hasOne(TypeVehicle);
TypeVehicle.belongsTo(Vehicle);

Vehicle.hasOne(YearVehicle);
YearVehicle.belongsTo(Vehicle);

Vehicle.hasOne(ColorVehicle);
ColorVehicle.belongsTo(Vehicle);

export default Vehicle;
