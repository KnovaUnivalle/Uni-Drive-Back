import Trip from '../../schemas/trip.schema.js';

/**
 * Create a trip in database
 * @param {Object} req
 * @param {Object} res
 */
const createTripController = async (req, res) => {
	const {
		vehicle,
		date,
		day,
		hour,
		rate,
		description,
		toUniversity,
		meetPoint,
	} = req.body;
	// /create trip and send status
	const trip = await Trip.create({
		date: date,
		day: day,
		hour: hour,
		rate: rate,
		description: description,
		toUniversity: toUniversity,
		meetPoint: meetPoint,
		VehicleId: vehicle,
	});

	return res.status(201).send('Viaje registrado con éxito');
};

export default createTripController;
