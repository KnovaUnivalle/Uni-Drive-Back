import Trip from '../../schemas/trip.schema.js';

/**
 * Send trip { id, date, day, rate, description, toUniversity, meetPoint, active} actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data
 */
export const getTrips = async (req, res) => {
	const { id } = req;

	const data = await Trip.findAll({
		where: { active: true, BidderId: id },
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
	});

	return res.status(200).json(data);
};
