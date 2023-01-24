import { Op } from 'sequelize';
import City from '../../schemas/city.schema.js';

/**
 * Send cities actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message/data
 */
export const getActiveCities = async (req, res) => {
	try {
		const data = await City.findAll({
			where: { active: true },
			attributes: ['id', 'description'],
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Ciudades no encontrados'] });
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Send all cities from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data
 */
export const getAllCitiesController = async (req, res) => {
	try {
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const data = await City.findAll({
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
 * Create a city in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createCityController = async (req, res) => {
	try {
		const { description, active } = req.body;

		const cityExisting = await City.findOne({
			where: {
				description: description,
			},
		});
		if (cityExisting)
			return res.status(409).send({
				errors: ['Ya existe una ciudad con esa descripción'],
			});

		const city = await City.create({
			description: description,
			active: active,
		});

		return res.status(201).json(city.id);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Update a city in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateCityController = async (req, res) => {
	try {
		const { description, active } = req.body;
		const { attribute } = req.params;

		const cityExisting = await City.findOne({
			where: {
				description: description,
			},
		});
		if (cityExisting && attribute != cityExisting.id)
			return res.status(409).send({
				errors: ['Ya existe una ciudad con esa descripción'],
			});

		await City.update(
			{ description: description, active: active },
			{
				where: {
					id: attribute,
				},
			}
		);

		return res.status(201).send('Ciudad actualizada con éxito');
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Return cities by description
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */
export const searchCitiesByDescriptionController = async (req, res, next) => {
	try {
		const { description } = req.query;

		if (!description) {
			return next();
		}
		const data = await City.findAll({
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
 * Return cities by id
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */

export const searchCitiesByIdController = async (req, res, next) => {
	try {
		const { id } = req.query;

		if (!id) {
			return next();
		}
		const data = await City.findAll({
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
 * Return cities by active
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */

export const searchCitiesByActiveController = async (req, res, next) => {
	try {
		const { active } = req.query;

		if (!active) {
			return next();
		}
		const data = await City.findAll({
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
