import Trip from '../../schemas/trip.schema.js';

const createTripController = async (req, res) => {
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
		VehicleID: vehicle,
	});

	return res.status(201).send('Viaje registrado con éxito');
};

export default createTripController;
