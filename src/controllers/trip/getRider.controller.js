import Rider from '../../schemas/rider.schema.js';
import RiderInTrip from '../../schemas/riderInTrip.schema.js';
import Trip from '../../schemas/trip.schema.js';

export const getRidersInTrips = async (req, res) => {
	const { id } = req;

	const { trip } = req.params;

	const bidderInTrip = await Trip.findOne({
		where: { id: trip, BidderId: id },
	});

	if (!bidderInTrip)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	const trips = await RiderInTrip.findAll({
		where: { TripId: trip },
		attributes: ['TripId'],
		include: [
			{ model: Rider, attributes: ['firstName', 'lastName', 'numberPhone'] },
		],
	});

	const data = trips['Rider'];
	return res.status(200).json(data);
};
