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
		if (data.length === 0)
			return res.status(404).send({ errors: ['Colores no encontrados'] });
		res.status(200).json(data);
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
		if (data.length === 0)
			return res.status(404).send({ errors: ['Colores no encontrados'] });
		res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Create a color in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
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
		if (colorExisting)
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
		if (data.length === 0)
			return res.status(404).send({ errors: ['Modelos no encontrados'] });
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
		if (data.length === 0)
			return res.status(404).send({ errors: ['Marcas no encontrados'] });
		res.status(200).json(data);
	} catch (error) {
		return res.status(500);
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
		const page = req.query.pages || 0;
		const limit = 20;
		const skipElements = limit * page;

		const data = await BrandVehicle.findAll({
			offset: skipElements,
			limit: limit,
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Marcas no encontrados'] });
		res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Create a brand in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const createBrandController = async (req, res) => {
	try {
		const { description, active } = req.body;

		const brandExisting = await BrandVehicle.findOne({
			where: {
				description: description,
			},
		});
		if (brandExisting)
			return res.status(409).send({
				errors: ['Ya existe una marca con esa descripción'],
			});

		const brand = await BrandVehicle.create({
			description: description,
			active: active,
		});
		return res.status(201).json(brand);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Update a brand in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
export const updateBrandController = async (req, res) => {
	try {
		const { description, active } = req.body;
		const { attribute } = req.params;

		const brandExisting = await BrandVehicle.findOne({
			where: {
				description: description,
			},
		});
		if (brandExisting)
			return res.status(409).send({
				errors: ['Ya existe una marca con esa descripción'],
			});

		await BrandVehicle.update(
			{ description: description, active: active },
			{
				where: {
					id: attribute,
				},
			}
		);

		return res.status(201).send('Marca de vehiculo actualizada con éxito');
	} catch (error) {
		return res.status(500);
	}
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
		if (data.length === 0)
			return res.status(404).send({ errors: ['Tipos no encontrados'] });
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
		if (typeExisting)
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
