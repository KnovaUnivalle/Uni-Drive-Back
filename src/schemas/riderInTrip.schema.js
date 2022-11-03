import DataTypes from 'sequelize';
import sequelize from '../config/db.js';
import Trip from './trip.schema.js';
import Rider from './rider.schema.js';

const RiderInTrip = sequelize.define(
	'RiderInTrip',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		description: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		point: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false, // no update at, no create at
	}
);

//associations
Trip.hasOne(RiderInTrip);
RiderInTrip.belongsTo(Trip);

Rider.hasOne(RiderInTrip);
RiderInTrip.belongsTo(Rider);

export default RiderInTrip;
