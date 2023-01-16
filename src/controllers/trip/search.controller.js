import { Op } from 'sequelize';
import Trip from '../../schemas/trip.schema.js';

export const searchTripRiderController = async (req, res) => {
	try {
		const { day, date, toUniversity } = req.query;

		const basicDate = new Date();
		const queryDay = day || basicDate.getUTCDate();
		const queryDate = date || basicDate.toISOString();
		const queryToUniversity = toUniversity || 0;

		if (queryToUniversity === 0) {
			const data = await Trip.findAll({
				where: { day: queryDay, date: { [Op.gte]: queryDate } },
			});
			if (data.length === 0)
				return res.status(404).send({ errors: ['Búsqueda inválida'] });
			return res.status(200).json(data);
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
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
