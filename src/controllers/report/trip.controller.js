import Trip from '../../schemas/trip.schema.js';
import { formatToUniversityReport } from '../../utils/arrayMethods.js';

export const toUniversityController = async (req, res) => {
	try {
		const total = await Trip.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const toUniversity = await Trip.count({ where: { toUniversity: true } });
		const noToUniversity = total - toUniversity;

		const data = formatToUniversityReport(toUniversity, noToUniversity);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
