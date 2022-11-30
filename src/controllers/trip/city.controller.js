import City from '../../schemas/city.schema.js';
import Admin from '../../schemas/admin.schema.js';

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
			attributes: ['id', 'name'],
		});
		res.send(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Ciudades no encontradas'] });
	}
};

/**
 * Send all cities from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getAllCityController = async (req, res) => {
	try {
		const { id, email } = req;

		const existingAdmin = await Admin.findOne({
			where: { id: id, email: email },
		});
		if (!existingAdmin)
			return res.status(401).send({ errors: ['Usuario no autorizado'] });
		const data = await City.findAll();
		res.send(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Ciudades no encontradas'] });
	}
};

/**
 * Create a city in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createCityController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await City.create({
		name: description,
		active: active,
	});

	return res.status(201).send('Ciudad registrada con éxito');
};

/**
 * Update a city in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateCityController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;
	const { city } = req.params;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await City.update(
		{ name: description, active: active },
		{
			where: {
				id: city,
			},
		}
	);

	return res.status(201).send('Ciudad actualizada con éxito');
};
