import Bidder from '../../schemas/bidder.schema.js';
import Vehicle from '../../schemas/vehicle.schema.js';

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
	} = req.body;

	const bidderByEmail = await Bidder.findOne({ where: { email: email } });
	if (bidderByEmail)
		return res.status(409).send({
			errors: ['Ya existe un conductor con ese email registrado'],
		});

	const vehicleByPlate = await Vehicle.findOne({ where: { plate: plate } });
	if (vehicleByPlate)
		return res.status(409).send({
			errors: ['Ya existe un vehiculo registrado con esa placa'],
		});

	const bidderByDocument = await Bidder.findOne({
		where: { document: document },
	});
	if (bidderByDocument)
		return res.status(409).send({
			errors: ['Ya existe un conductor con ese documento registrado'],
		});

	const bidder = await Bidder.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		birthDate: birthDate,
		numberPhone: number,
		document: document,
	});

	const vehicle = await Vehicle.create({
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
