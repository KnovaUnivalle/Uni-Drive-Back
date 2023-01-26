import { Op } from 'sequelize';
import TypeVehicle from '../../schemas/typeVehicle.schema.js';

/**
 * Send types actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getActiveTypesController = async (req, res) => {
	try {
		const data = await TypeVehicle.findAll({
			where: { active: true },
			attributes: ['id', 'description'],
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Tipos no encontrados'] });
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Send all types from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data (list)
 */
export const getAllTypesController = async (req, res) => {
	try {
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const data = await TypeVehicle.findAll({
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
 * Create a type in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createTypeController = async (req, res) => {
	try {
		const { description, active } = req.body;

		const typeExisting = await TypeVehicle.findOne({
			where: {
				description: description,
			},
		});
		if (typeExisting)
			return res.status(409).send({
				errors: ['Ya existe una tipo de vehiculos con esa descripción'],
			});

		const type = await TypeVehicle.create({
			description: description,
			active: active,
		});

		return res.status(201).json(type.id);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Create a type in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateTypeController = async (req, res) => {
	try {
		const { description, active } = req.body;
		const { attribute } = req.params;

		const typeExisting = await TypeVehicle.findOne({
			where: {
				description: description,
			},
		});
		if (typeExisting && attribute != typeExisting.id)
			return res.status(409).send({
				errors: ['Ya existe una tipo de vehiculos con esa descripción'],
			});

		await TypeVehicle.update(
			{ description: description, active: active },
			{
				where: {
					id: attribute,
				},
			}
		);

		return res.status(201).send('Tipo de vehiculo actualizado con éxito');
	} catch (error) {
		return res.status(500);
	}
};

/**
/**
 * Return types by description
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */
export const searchTypesByDescriptionController = async (req, res, next) => {
	try {
		const { description } = req.query;

		if (!description) {
			return next();
		}
		const data = await TypeVehicle.findAll({
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
 * Return types by id
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */

export const searchTypesByIdController = async (req, res, next) => {
	try {
		const { id } = req.query;

		if (!id) {
			return next();
		}
		const data = await TypeVehicle.findAll({
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
 * Return types by active
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */

export const searchTypesByActiveController = async (req, res, next) => {
	try {
		const { active } = req.query;

		if (!active) {
			return next();
		}
		const data = await TypeVehicle.findAll({
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
