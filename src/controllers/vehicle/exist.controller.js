import Vehicle from '../../schemas/vehicle.schema.js';

/**
 * Check if vehicle exist
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
const vehicleExistController = async (req, res, next) => {
	const { plate } = req.body;

	//validate duplicate plate
	const vehicleByPlate = await Vehicle.findOne({ where: { plate: plate } });
	if (vehicleByPlate)
		return res.status(409).send({
			errors: ['Ya existe un vehiculo registrado con esa placa'],
		});

	next();
};

export default vehicleExistController;
