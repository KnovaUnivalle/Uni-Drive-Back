import BrandVehicle from '../../schemas/brandVehicle.schema.js';
import ColorVehicle from '../../schemas/colorVehicle.schema.js';
import TypeVehicle from '../../schemas/typeVehicle.schema.js';
import YearVehicle from '../../schemas/yearVehicle.schema.js';

//return colors actives from bd
export const getColorController = async (req, res) => {
	const data = await ColorVehicle.findAll({
		where: { active: true },
		attributes: ['id', 'name'],
	});
	res.json(data);
};

//return years actives from bd
export const getYearController = async (req, res) => {
	const data = await YearVehicle.findAll({
		where: { active: true },
		attributes: ['id', 'name'],
	});
	res.json(data);
};

//return brands actives from bd
export const getBrandController = async (req, res) => {
	const data = await BrandVehicle.findAll({
		where: { active: true },
		attributes: ['id', 'name'],
	});
	res.json(data);
};

//return types actives from bd
export const getTypeController = async (req, res) => {
	const data = await TypeVehicle.findAll({
		where: { active: true },
		attributes: ['id', 'name'],
	});
	res.json(data);
};
