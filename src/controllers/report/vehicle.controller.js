import sequelize from '../../config/db.js';
import Trip from '../../schemas/trip.schema.js';
import Vehicle from '../../schemas/vehicle.schema.js';
import {
	formatActiveReport,
	formatFrequentIDReport,
} from '../../utils/arrayMethods.js';

const limit = 5;

/**
 *send the most frequent vehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const frequentVehicleController = async (req, res) => {
	try {
		const vehicles = await Trip.findAll({
			attributes: [
				'VehicleId',
				[sequelize.fn('COUNT', sequelize.col('VehicleId')), 'count'],
			],
			group: ['VehicleId'],
			limit: limit,
			order: [['count', 'DESC']],
		});
		if (vehicles.length === 0) return res.status(404).json([]);
		const data = formatFrequentIDReport(vehicles, 'VehicleId');
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 *send number of active and inactive vehicles
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const activeVehicleController = async (req, res) => {
	try {
		const total = await Vehicle.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const active = await Vehicle.count({ where: { active: true } });
		const noActive = total - active;

		const data = formatActiveReport(active, noActive);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
