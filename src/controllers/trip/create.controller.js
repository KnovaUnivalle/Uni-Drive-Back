import Trip from '../../schemas/trip.schema.js';

const createTripController = async (req, res) => {
	const { vehicle, date, day, rate, description, toUniversity, meetPoint } =
		req.body;

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
