import { Op } from 'sequelize';
import Trip from '../../schemas/trip.schema.js';

export const searchTripRiderController = async (req, res) => {
	try {
		const { day, date, toUniversity } = req.query;

		const queryDay = day || '1';
		const queryDate = date || '';
		const queryToUniversity = toUniversity || 0;

		if (queryToUniversity === 0) {
			const data = await Trip.findAll({
				where: { day: queryDay, date: { [Op.gte]: queryDate } },
			});
			if (data.length === 0)
				return res.status(404).send({ errors: ['Búsqueda inválida'] });
		}

		const data = await Trip.findAll({
			where: {
				toUniversity: queryToUniversity,
				day: queryDay,
				date: { [Op.gte]: queryDate },
			},
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Búsqueda inválida'] });
	} catch (error) {
		return res.status(500);
	}
};
