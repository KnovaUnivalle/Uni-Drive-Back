import Bidder from '../../schemas/bidder.schema.js';
import BrandVehicle from '../../schemas/brandVehicle.schema.js';
import ColorVehicle from '../../schemas/colorVehicle.schema.js';
import TypeVehicle from '../../schemas/typeVehicle.schema.js';
import Vehicle from '../../schemas/vehicle.schema.js';
import YearVehicle from '../../schemas/yearVehicle.schema.js';

/**
 * Send vehicles { id, plate, available, type, brand } actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data
 */
export const getActivesVehiclesBidderController = async (req, res) => {
	try {
		const { id } = req;

		const data = await Vehicle.findAll({
			where: { active: true, BidderId: id },
			attributes: ['id', 'plate', 'available'],
			include: [
				{ model: TypeVehicle, attributes: ['description'] },
				{ model: BrandVehicle, attributes: ['description'] },
			],
		});
		if (data.length === 0)
			return res.status(404).send({ errors: ['Vehiculos no encontrados'] });
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Send vehicles { id, plate, available, type, brand, bidder } actives from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data
 */
export const getVehiclesController = async (req, res) => {
	try {
		const data = await Vehicle.findAll({
			attributes: ['id', 'plate', 'active'],
			include: [{ model: Bidder, attributes: ['id', 'firstName'] }],
		});
		if (data.length === 0) return res.status(404).json(data);
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};

/**
 * Send vehicle by id { idBidder, plate, available, type, brand, year, color, firstName, lastName } from database
 * @param {Object} req
 * @param {Object} res
 * @returns status and data
 */
export const getVehicleController = async (req, res) => {
	try {
		const { id } = req.params;

		const data = await Vehicle.findOne({
			where: { id: id },
			attributes: ['plate', 'available', 'active'],
			include: [
				{ model: TypeVehicle, attributes: ['description'] },
				{ model: BrandVehicle, attributes: ['description'] },
				{ model: YearVehicle, attributes: ['description'] },
				{ model: ColorVehicle, attributes: ['description'] },
				{ model: Bidder, attributes: ['id', 'firstName', 'lastName'] },
			],
		});
		if (!data)
			return res.status(404).send({ errors: ['Vehiculo no encontrado'] });
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500);
	}
};
