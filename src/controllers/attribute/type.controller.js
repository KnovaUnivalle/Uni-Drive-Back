import TypeVehicle from '../../schemas/typeVehicle.schema.js';

/**
 * Send types actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getTypeController = async (req, res) => {
	try {
		const data = await TypeVehicle.findAll({
			where: { active: true },
			attributes: ['id', 'description'],
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Tipos no encontrados'] });
		res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Send all types from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getAllTypeController = async (req, res) => {
	try {
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const data = await TypeVehicle.findAll({
			offset: skipElements,
			limit: limit,
		});
		if (data.length === 0) return res.status(404).json(data);
		res.status(200).json(data);
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

		return res.status(201).json(type);
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
