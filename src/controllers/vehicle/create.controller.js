import Vehicle from '../../schemas/vehicle.schema.js';

/**
 * Create a vehicle in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
const bidderCreateController = async (req, res) => {
	const {
		plate,
		available,
		typeVehicle,
		brandVehicle,
		colorVehicle,
		yearVehicle,
	} = req.body;

	const { id } = req;

	await Vehicle.create({
		plate: plate,
		available: available,
		BrandVehicleId: brandVehicle,
		YearVehicleId: yearVehicle,
		ColorVehicleId: colorVehicle,
		TypeVehicleId: typeVehicle,
		BidderId: id,
	});

	return res.status(201).send('Registrado con éxito');
};

export default bidderCreateController;
