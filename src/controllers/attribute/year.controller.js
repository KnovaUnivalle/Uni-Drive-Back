import YearVehicle from '../../schemas/yearVehicle.schema.js';

/**
 * Send years actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getYearController = async (req, res) => {
	try {
		const data = await YearVehicle.findAll({
			where: { active: true },
			attributes: ['id', 'description'],
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Modelos no encontrados'] });
		res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Send all years from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getAllYearController = async (req, res) => {
	try {
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const data = await YearVehicle.findAll({
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

		return res.status(201).json(year);
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
		if (yearExisting)
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
