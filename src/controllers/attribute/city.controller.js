import City from '../../schemas/city.schema.js';

/**
 * Send cities actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getCityController = async (req, res) => {
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
 * @returns status and data (list)
 */
export const getAllCityController = async (req, res) => {
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

		return res.status(201).json(city);
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
		const { city } = req.params;

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
					id: city,
				},
			}
		);

		return res.status(201).send('Ciudad actualizada con éxito');
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Return colors by query params
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns status and data (list)
 */
export const searchCityController = async (req, res, next) => {
	try {
		const { id, description } = req.query;

		console.log(id);
		if (!id && !description) {
			next();
		}

		if (description) {
			const data = await City.findAll({
				where: {
					description: { [Op.substring]: description },
				},
			});
			if (data.length === 0) return res.status(404).json(data);
			return res.status(200).json(data);
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
