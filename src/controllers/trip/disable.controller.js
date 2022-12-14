import Trip from '../../schemas/trip.schema.js';

/**
 * Update status Trip in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const disableTrip = async (req, res) => {
	const { id } = req.body;

	await Trip.update(
		{
			active: false,
		},
		{
			where: {
				id: id,
			},
		}
	);

	return res.status(201).send('Estado de viaje actualizado');
};
