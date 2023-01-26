import sequelize from '../../config/db.js';
import BrandVehicle from '../../schemas/brandVehicle.schema.js';
import City from '../../schemas/city.schema.js';
import ColorVehicle from '../../schemas/colorVehicle.schema.js';
import TypeVehicle from '../../schemas/typeVehicle.schema.js';
import Vehicle from '../../schemas/vehicle.schema.js';
import YearVehicle from '../../schemas/yearVehicle.schema.js';
import { formatActiveReport } from '../../utils/arrayMethods.js';

const limit = 5;

/**
 *send number of active and inactive brand from BrandVehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const activeBrandController = async (req, res) => {
	try {
		const total = await BrandVehicle.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const active = await BrandVehicle.count({ where: { active: true } });
		const noActive = total - active;

		const data = formatActiveReport(active, noActive);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 *send number of active and inactive city
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const activeCityController = async (req, res) => {
	try {
		const total = await City.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const active = await City.count({ where: { active: true } });
		const noActive = total - active;

		const data = formatActiveReport(active, noActive);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 *send number of active and inactive colorVehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const activeColorController = async (req, res) => {
	try {
		const total = await ColorVehicle.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const active = await ColorVehicle.count({ where: { active: true } });
		const noActive = total - active;

		const data = formatActiveReport(active, noActive);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 *send number of active and inactive typeVehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const activeTypeController = async (req, res) => {
	try {
		const total = await TypeVehicle.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const active = await TypeVehicle.count({ where: { active: true } });
		const noActive = total - active;

		const data = formatActiveReport(active, noActive);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 *send number of active and inactive yearVehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const activeYearController = async (req, res) => {
	try {
		const total = await YearVehicle.count();
		if (total === 0) return res.status(404).send({ errors: ['Sin datos'] });

		const active = await YearVehicle.count({ where: { active: true } });
		const noActive = total - active;

		const data = formatActiveReport(active, noActive);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 *send the most frequent brand from BrandVehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const frequentBrandController = async (req, res) => {
	try {
		const data = await Vehicle.findAll({
			attributes: [
				'BrandVehicleId',
				[sequelize.fn('COUNT', sequelize.col('BrandVehicleId')), 'count'],
			],
			group: ['BrandVehicleId', 'BrandVehicle.id'],
			limit: limit,
			order: [['count', 'DESC']],
			include: [{ model: BrandVehicle, attributes: ['description'] }],
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
export const frequentCityController = async (req, res) => {};

/**
 * send the most frequent color from ColorVehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const frequentColorController = async (req, res) => {
	try {
		const data = await Vehicle.findAll({
			attributes: [
				'ColorVehicleId',
				[sequelize.fn('COUNT', sequelize.col('ColorVehicleId')), 'count'],
			],
			group: ['ColorVehicleId', 'ColorVehicle.id'],
			limit: limit,
			order: [['count', 'DESC']],
			include: [{ model: ColorVehicle, attributes: ['description'] }],
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * send the most frequent type from TypeVehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const frequentTypeController = async (req, res) => {
	try {
		const data = await Vehicle.findAll({
			attributes: [
				'TypeVehicleId',
				[sequelize.fn('COUNT', sequelize.col('TypeVehicleId')), 'count'],
			],
			group: ['TypeVehicleId', 'TypeVehicle.id'],
			limit: limit,
			order: [['count', 'DESC']],
			include: [{ model: TypeVehicle, attributes: ['description'] }],
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * send the most frequent year from YearVehicle
 * @param {Object} req
 * @param {Object} res
 * @returns
 */
export const frequentYearController = async (req, res) => {
	try {
		const data = await Vehicle.findAll({
			attributes: [
				'YearVehicleId',
				[sequelize.fn('COUNT', sequelize.col('YearVehicleId')), 'count'],
			],
			group: ['YearVehicleId', 'YearVehicle.id'],
			limit: limit,
			order: [['count', 'DESC']],
			include: [{ model: YearVehicle, attributes: ['description'] }],
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
