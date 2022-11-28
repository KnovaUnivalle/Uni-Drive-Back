import Admin from '../../schemas/admin.schema.js';
import BrandVehicle from '../../schemas/brandVehicle.schema.js';
import ColorVehicle from '../../schemas/colorVehicle.schema.js';
import TypeVehicle from '../../schemas/typeVehicle.schema.js';
import YearVehicle from '../../schemas/yearVehicle.schema.js';

// COLOR

/**
 * send colors actives from database
 * @param {*} req
 * @param {*} res
 */
export const getColorController = async (req, res) => {
	const data = await ColorVehicle.findAll({
		where: { active: true },
		attributes: ['id', 'name'],
	});
	res.json(data);
};

/**
 * create a color in database
 * @param {*} req
 * @param {*} res
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
 * update a color in database
 * @param {*} req
 * @param {*} res
 */
export const updateColorController = async (req, res) => {
	const { id, email } = req;
	const { attribute, description, active } = req.body;

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
 * send years actives from database
 * @param {*} req
 * @param {*} res
 */
export const getYearController = async (req, res) => {
	const data = await YearVehicle.findAll({
		where: { active: true },
		attributes: ['id', 'name'],
	});
	res.json(data);
};

/**
 * create a year in database
 * @param {*} req
 * @param {*} res
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
 * update a year in database
 * @param {*} req
 * @param {*} res
 */
export const updateYearController = async (req, res) => {
	const { id, email } = req;
	const { attribute, description, active } = req.body;

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
 * send brands actives from database
 * @param {*} req
 * @param {*} res
 */
export const getBrandController = async (req, res) => {
	const data = await BrandVehicle.findAll({
		where: { active: true },
		attributes: ['id', 'name'],
	});
	res.json(data);
};

/**
 * create a brand in database
 * @param {*} req
 * @param {*} res
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
 * update a brand in database
 * @param {*} req
 * @param {*} res
 */
export const updateBrandController = async (req, res) => {
	const { id, email } = req;
	const { attribute, description, active } = req.body;

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
 * send types actives from database
 * @param {*} req
 * @param {*} res
 */
export const getTypeController = async (req, res) => {
	const data = await TypeVehicle.findAll({
		where: { active: true },
		attributes: ['id', 'name'],
	});
	res.json(data);
};

/**
 * create a type in database
 * @param {*} req
 * @param {*} res
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
 * create a type in database
 * @param {*} req
 * @param {*} res
 */
export const updateTypeController = async (req, res) => {
	const { id, email } = req;
	const { attribute, description, active } = req.body;

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
