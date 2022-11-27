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
export const createColorController = async (req, res) => {};

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
export const createYearController = async (req, res) => {};

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
export const createBrandController = async (req, res) => {};

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
export const createTypeController = async (req, res) => {};

/**
 * create a type in database
 * @param {*} req
 * @param {*} res
 */
export const updateTypeController = async (req, res) => {};
