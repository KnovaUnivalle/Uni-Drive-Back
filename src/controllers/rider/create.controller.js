import Rider from '../../schemas/rider.schema.js';

/**
 * Create a rider in database
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

	return res.status(201).send('Registrado con éxito');
};

export default riderCreateController;
