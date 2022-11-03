import Bidder from '../../schemas/bidder.schema.js';

const bidderCreateController = async (req, res) => {
	const { firstName, lastName, email, password, birthDate, number } = req.body;

	const bidderByEmail = await Bidder.findOne({ where: { email: email } });
	if (bidderByEmail)
		return res.status(409).send({
			errors: ['Ya existe un conductor con ese email registrado'],
		});

	const bidder = await Bidder.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		birthDate: birthDate,
		numberPhone: number,
	});

	return res.status(201).send('Conductor registrado con éxito');
};

export default bidderCreateController;
