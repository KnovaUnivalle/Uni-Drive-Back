import Bidder from '../../schemas/bidder.schema.js';
import Rider from '../../schemas/rider.schema.js';
import RiderInTrip from '../../schemas/riderInTrip.schema.js';
import Trip from '../../schemas/trip.schema.js';
import Vehicle from '../../schemas/vehicle.schema.js';
import { arrayObjectsToArrayIds } from '../../utils/arrayMethods.js';

/**
 * Send trip { id, date, day, rate, description, toUniversity, meetPoint, active} actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data
 */
export const getTripsController = async (req, res) => {
	const { id } = req;
	const { active } = req.query;

	const queryActive = active || true;

	const vehicles = await Vehicle.findAll({
		where: { BidderId: id },
		attributes: ['id'],
	});

	const ids = arrayObjectsToArrayIds(vehicles);

	const data = await Trip.findAll({
		where: { active: queryActive, VehicleId: ids },
		attributes: [
			'id',
			'date',
			'day',
			'rate',
			'description',
			'toUniversity',
			'meetPoint',
			'active',
		],
		include: [{ model: Vehicle, attributes: ['plate', 'TypeVehicleId'] }],
	});

	return res.status(200).json(data);
};

export const getTripRiderController = async (req, res) => {
	const { id } = req;
	const { active } = req.query;

	const queryActive = active || true;

	const trips = await RiderInTrip.findAll({
		where: { RiderId: id },
		attributes: ['TripId'],
	});

	const ids = arrayObjectsToArrayIds(trips);

	const data = await Trip.findAll({
		where: { active: queryActive, id: ids },
		attributes: [
			'id',
			'date',
			'day',
			'rate',
			'description',
			'toUniversity',
			'meetPoint',
			'active',
		],
		include: [
			{ model: Vehicle, attributes: ['plate', 'TypeVehicleId'] },
			{ model: Bidder, attributes: ['firstName', 'lastName', 'numberPhone'] },
		],
	});

	return res.status(200).json(data);
};
