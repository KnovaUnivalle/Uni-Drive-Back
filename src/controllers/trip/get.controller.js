import Trip from '../../schemas/trip.schema.js';
import Vehicle from '../../schemas/vehicle.schema.js';

/**
 * Send trip { id, date, day, rate, description, toUniversity, meetPoint, active} actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data
 */
export const getTrips = async (req, res) => {
	const { id } = req;
	const vehicles = await Vehicle.findAll({
		where: { BidderId: id },
		attributes: ['id'],
	});
	const ids = vehicles.reduce((prev, cur) => prev.push(cur.id), []);
	const data = await Trip.findAll({
		where: { active: true, VehicleId: ids },
		attributes: [
			'id',
			'date',
			'day',
			'hour',
			'rate',
			'description',
			'toUniversity',
			'meetPoint',
			'active',
		],
	});

	return res.status(200).json(data);
};
