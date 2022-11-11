import Rider from '../../schemas/rider.schema.js';

const riderCreateController = async (req, res) => {
	const { firstName, lastName, email, password, birthDate, number, document } =
		req.body;

	const riderByEmail = await Rider.findOne({ where: { email: email } });
	if (riderByEmail)
		return res.status(409).send({
			errors: ['Ya existe un usuario con ese email registrado'],
		});

	const riderByDocument = await Rider.findOne({
		where: { document: document },
	});
	if (riderByDocument)
		return res.status(409).send({
			errors: ['Ya existe un usuario con ese documento registrado'],
		});

	const bidder = await Rider.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		birthDate: birthDate,
		numberPhone: number,
		document: document,
	});

	return res.status(201).send('Usuario registrado con éxito');
};

export default riderCreateController;
