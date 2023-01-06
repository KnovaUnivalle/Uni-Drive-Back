import BrandVehicle from '../../schemas/brandVehicle.schema.js';

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
		if (data.length === 0) return res.status(404).json(data);
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
		if (brandExisting && attribute != brandExisting.id)
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
