import Bidder from '../../schemas/bidder.schema.js';
import Vehicle from '../../schemas/vehicle.schema.js';

/**
 * Create a rider and its vehicle in database if not exist
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
const bidderCreateController = async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		password,
		birthDate,
		number,
		document,
		plate,
		available,
		typeVehicle,
		brandVehicle,
		colorVehicle,
		yearVehicle,
		city,
	} = req.body;

	//validate duplicate email
	const bidderByEmail = await Bidder.findOne({ where: { email: email } });
	if (bidderByEmail)
		return res.status(409).send({
			errors: ['Ya existe un conductor con ese email registrado'],
		});

	//validate duplicate plate
	const vehicleByPlate = await Vehicle.findOne({ where: { plate: plate } });
	if (vehicleByPlate)
		return res.status(409).send({
			errors: ['Ya existe un vehiculo registrado con esa placa'],
		});
	//validate duplicate cc
	const bidderByDocument = await Bidder.findOne({
		where: { document: document },
	});
	if (bidderByDocument)
		return res.status(409).send({
			errors: ['Ya existe un conductor con ese documento registrado'],
		});

	//create bidder and vehicle, send status
	const bidder = await Bidder.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		birthDate: birthDate,
		numberPhone: number,
		document: document,
		CityID: city,
	});

	await Vehicle.create({
		plate: plate,
		available: available,
		BrandVehicleId: brandVehicle,
		YearVehicleId: yearVehicle,
		ColorVehicleId: colorVehicle,
		TypeVehicleId: typeVehicle,
		BidderId: bidder.id,
	});

	return res.status(201).send('Conductor y vehiculo registrado con éxito');
};

export default bidderCreateController;
