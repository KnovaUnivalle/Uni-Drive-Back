import Rider from '../../schemas/rider.schema.js';

const riderCreateController = async (req, res) => {
	const { firstName, lastName, email, password, birthDate, number } = req.body;

	const riderByEmail = await Rider.findOne({ where: { email: email } });
	if (riderByEmail)
		return res.status(409).send({
			errors: ['Ya existe un usuario con ese email registrado'],
		});

	const bidder = await Rider.create({
		firstName: firstName,
		lastName: lastName,
		password: password,
		birthDate: birthDate,
		number: number,
	});

	return res.status(201).send('Usuario registrado con éxito');
};

export default riderCreateController;
