import Admin from '../../schemas/admin.schema.js';
import BrandVehicle from '../../schemas/brandVehicle.schema.js';
import ColorVehicle from '../../schemas/colorVehicle.schema.js';
import TypeVehicle from '../../schemas/typeVehicle.schema.js';
import YearVehicle from '../../schemas/yearVehicle.schema.js';

// COLOR

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
		res.status(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Colores no encontrados'] });
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
		const { id, email } = req;
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const existingAdmin = await Admin.findOne({
			where: { id: id, email: email },
		});
		if (!existingAdmin)
			return res.status(401).send({ errors: ['Usuario no autorizado'] });

		const data = await ColorVehicle.findAll({
			offset: skipElements,
			limit: limit,
		});
		res.status(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Colores no encontrados'] });
	}
};

/**
 * Create a color in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createColorController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await ColorVehicle.create({
		description: description,
		active: active,
	});

	return res.status(201).send('Color de vehiculo registrado con éxito');
};

/**
 * Update a color in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateColorController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;
	const { attribute } = req.params;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await ColorVehicle.update(
		{ description: description, active: active },
		{
			where: {
				id: attribute,
			},
		}
	);

	return res.status(201).send('Color de vehiculo actualizado con éxito');
};

// YEAR

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
		res.status(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Modelos no encontrados'] });
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
		const { id, email } = req;
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const existingAdmin = await Admin.findOne({
			where: { id: id, email: email },
		});
		if (!existingAdmin)
			return res.status(401).send({ errors: ['Usuario no autorizado'] });

		const data = await YearVehicle.findAll({
			offset: skipElements,
			limit: limit,
		});
		res.status(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Modelos no encontrados'] });
	}
};

/**
 * Create a year in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createYearController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await YearVehicle.create({
		description: description,
		active: active,
	});

	return res.status(201).send('Modelo de vehiculo registrado con éxito');
};

/**
 * Update a year in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateYearController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;
	const { attribute } = req.params;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await YearVehicle.update(
		{ description: description, active: active },
		{
			where: {
				id: attribute,
			},
		}
	);

	return res.status(201).send('Modelo de vehiculo actualizado con éxito');
};

// BRAND

/**
 * Send brands actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getBrandController = async (req, res) => {
	try {
		const data = await BrandVehicle.findAll({
			where: { active: true },
			attributes: ['id', 'description'],
		});
		res.status(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Marcas no encontradas'] });
	}
};

/**
 * Send all brands from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const getAllBrandController = async (req, res) => {
	try {
		const { id, email } = req;
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const existingAdmin = await Admin.findOne({
			where: { id: id, email: email },
		});
		if (!existingAdmin)
			return res.status(401).send({ errors: ['Usuario no autorizado'] });

		const data = await BrandVehicle.findAll({
			offset: skipElements,
			limit: limit,
		});
		res.status(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Marcas no encontradas'] });
	}
};

/**
 * Create a brand in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createBrandController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await BrandVehicle.create({
		description: description,
		active: active,
	});

	return res.status(201).send('Marca de vehiculo registrada con éxito');
};

/**
 * Update a brand in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateBrandController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;
	const { attribute } = req.params;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await BrandVehicle.update(
		{ description: description, active: active },
		{
			where: {
				id: attribute,
			},
		}
	);

	return res.status(201).send('Marca de vehiculo actualizada con éxito');
};

// TYPE

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
		res.status(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Tipos no encontrados'] });
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
		const { id, email } = req;
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const existingAdmin = await Admin.findOne({
			where: { id: id, email: email },
		});
		if (!existingAdmin)
			return res.status(401).send({ errors: ['Usuario no autorizado'] });

		const data = await TypeVehicle.findAll({
			offset: skipElements,
			limit: limit,
		});
		res.status(200).json(data);
	} catch (error) {
		return res.status(404).send({ errors: ['Tipos no encontrados'] });
	}
};

/**
 * Create a type in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createTypeController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await TypeVehicle.create({
		description: description,
		active: active,
	});

	return res.status(201).send('Tipo de vehiculo registrado con éxito');
};

/**
 * Create a type in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateTypeController = async (req, res) => {
	const { id, email } = req;
	const { description, active } = req.body;
	const { attribute } = req.params;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	await TypeVehicle.update(
		{ description: description, active: active },
		{
			where: {
				id: attribute,
			},
		}
	);

	return res.status(201).send('Tipo de vehiculo actualizado con éxito');
};
