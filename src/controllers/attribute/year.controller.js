import { Op } from 'sequelize';
import YearVehicle from '../../schemas/yearVehicle.schema.js';

/**
 * Send years actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getActiveYearsController = async (req, res) => {
	try {
		const data = await YearVehicle.findAll({
			where: { active: true },
			attributes: ['id', 'description'],
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Modelos no encontrados'] });
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Send all years from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data (list)
 */
export const getAllYearsController = async (req, res) => {
	try {
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const data = await YearVehicle.findAll({
			offset: skipElements,
			limit: limit,
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Create a year in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createYearController = async (req, res) => {
	try {
		const { description, active } = req.body;

		const yearExisting = await YearVehicle.findOne({
			where: {
				description: description,
			},
		});
		if (yearExisting)
			return res.status(409).send({
				errors: ['Ya existe un modelo con esa descripción'],
			});

		const year = await YearVehicle.create({
			description: description,
			active: active,
		});

		return res.status(201).json(year.id);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Update a year in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateYearController = async (req, res) => {
	try {
		const { description, active } = req.body;
		const { attribute } = req.params;

		const yearExisting = await YearVehicle.findOne({
			where: {
				description: description,
			},
		});
		if (yearExisting && attribute != yearExisting.id)
			return res.status(409).send({
				errors: ['Ya existe un modelo con esa descripción'],
			});

		await YearVehicle.update(
			{ description: description, active: active },
			{
				where: {
					id: attribute,
				},
			}
		);

		return res.status(201).send('Modelo de vehiculo actualizado con éxito');
	} catch (error) {
		return res.status(500);
	}
};

/**
/**
 * Return years by description
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */
export const searchYearsByDescriptionController = async (req, res, next) => {
	try {
		const { description } = req.query;

		if (!description) {
			return next();
		}
		const data = await YearVehicle.findAll({
			where: {
				description: { [Op.substring]: description },
			},
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Return years by id
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */

export const searchYearsByIdController = async (req, res, next) => {
	try {
		const { id } = req.query;

		if (!id) {
			return next();
		}
		const data = await YearVehicle.findAll({
			where: {
				id: id,
			},
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Return years by active
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */

export const searchYearsByActiveController = async (req, res, next) => {
	try {
		const { active } = req.query;

		if (!active) {
			return next();
		}
		const data = await YearVehicle.findAll({
			where: {
				active: active,
			},
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
