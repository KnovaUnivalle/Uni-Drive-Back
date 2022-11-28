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
export const updateColorController = async (req, res) => {};

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
export const updateYearController = async (req, res) => {};

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

	return res.status(201).send('Marca de vehiculo registrado con éxito');
};

/**
 * update a brand in database
 * @param {*} req
 * @param {*} res
 */
export const updateBrandController = async (req, res) => {};

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
export const updateTypeController = async (req, res) => {};
