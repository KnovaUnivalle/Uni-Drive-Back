import RiderInTrip from '../../schemas/riderInTrip.schema.js';
import Trip from '../../schemas/trip.schema.js';

/**
 * Create a trip in database
 * @param {Object} req
 * @param {Object} res
 */
export const createTripController = async (req, res) => {
	const { id } = req;
	const { vehicle, date, day, rate, description, toUniversity, meetPoint } =
		req.body;
	// /create trip and send status
	const trip = await Trip.create({
		date: date,
		day: day,
		rate: rate,
		description: description,
		toUniversity: toUniversity,
		meetPoint: meetPoint,
		VehicleId: vehicle,
		BidderId: id,
	});

	return res.status(201).send('Viaje registrado con éxito');
};

export default createTripController;

export const createRiderInTripController = async (req, res) => {
	const { id } = req;
	const { trip } = req.body;

	// /create trip and send status
	const riderInTrip = await RiderInTrip.create({
		TripId: trip,
		RiderId: id,
		status: 1,
	});

	return res.status(201).send('Viaje registrado con éxito');
};
