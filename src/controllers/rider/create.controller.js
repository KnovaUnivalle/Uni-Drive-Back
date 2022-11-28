import Rider from '../../schemas/rider.schema.js';

/**
 * Create a rider in database if not exist
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
const riderCreateController = async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		password,
		birthDate,
		number,
		document,
		city,
	} = req.body;

	//validate duplicate email
	const riderByEmail = await Rider.findOne({ where: { email: email } });
	if (riderByEmail)
		return res.status(409).send({
			errors: ['Ya existe un usuario con ese email registrado'],
		});

	//validate duplicate cc
	const riderByDocument = await Rider.findOne({
		where: { document: document },
	});
	if (riderByDocument)
		return res.status(409).send({
			errors: ['Ya existe un usuario con ese documento registrado'],
		});

	//create rider and send status
	await Rider.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		birthDate: birthDate,
		numberPhone: number,
		document: document,
		CityID: city,
	});

	return res.status(201).send('Pasajero registrado con éxito');
};

export default riderCreateController;
