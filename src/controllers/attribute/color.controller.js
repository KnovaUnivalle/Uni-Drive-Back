import { Op } from 'sequelize';
import ColorVehicle from '../../schemas/colorVehicle.schema.js';

/**
 * Send colors actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getColorController = async (req, res) => {
	try {
		const data = await ColorVehicle.findAll({
			where: { active: true },
			attributes: ['id', 'description'],
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Colores no encontrados'] });
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Send all colors from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getAllColorController = async (req, res) => {
	try {
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const data = await ColorVehicle.findAll({
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
 * Create a color in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data (list)
 */
export const createColorController = async (req, res) => {
	try {
		const { description, active } = req.body;

		const colorExisting = await ColorVehicle.findOne({
			where: {
				description: description,
			},
		});
		if (colorExisting)
			return res.status(409).send({
				errors: ['Ya existe un color con esa descripción'],
			});

		const color = await ColorVehicle.create({
			description: description,
			active: active,
		});
		return res.status(201).json(color);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Update a color in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateColorController = async (req, res) => {
	try {
		const { description, active } = req.body;
		const { attribute } = req.params;

		const colorExisting = await ColorVehicle.findOne({
			where: {
				description: description,
			},
		});
		if (colorExisting && attribute != colorExisting.id)
			return res.status(409).send({
				errors: ['Ya existe un color con esa descripción'],
			});

		await ColorVehicle.update(
			{ description: description, active: active },
			{
				where: {
					id: attribute,
				},
			}
		);

		return res.status(201).send('Color de vehiculo actualizado con éxito');
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Return cities by query params
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */
export const searchColorController = async (req, res, next) => {
	try {
		const { id, description } = req.query;

		if (!id && !description) {
			next();
		}

		if (description) {
			const data = await ColorVehicle.findAll({
				where: {
					description: { [Op.substring]: description },
				},
			});
			if (data.length === 0) return res.status(404).json(data);
			return res.status(200).json(data);
		}
		const data = await ColorVehicle.findAll({
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
