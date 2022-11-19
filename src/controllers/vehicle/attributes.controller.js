import BrandVehicle from '../../schemas/brandVehicle.schema.js';
import ColorVehicle from '../../schemas/colorVehicle.schema.js';
import TypeVehicle from '../../schemas/typeVehicle.schema.js';
import YearVehicle from '../../schemas/yearVehicle.schema.js';

//return colors from bd
export const getColorController = async (req, res) => {
	const data = await ColorVehicle.findAll();
	res.json(data);
};

//return years from bd
export const getYearController = async (req, res) => {
	const data = await YearVehicle.findAll();
	res.json(data);
};

//return brands from bd
export const getBrandController = async (req, res) => {
	const data = await BrandVehicle.findAll();
	res.json(data);
};

//return types from bd
export const getTypeController = async (req, res) => {
	const data = await TypeVehicle.findAll();
	res.json(data);
};
