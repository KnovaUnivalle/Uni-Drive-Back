import { SignJWT } from 'jose';
import Bidder from '../../schemas/bidder.schema.js';

const bidderLoginController = async (req, res) => {
	const { email, password } = req.body;

	const bidderByEmail = await Bidder.findOne({ where: { email: email } });
	if (!bidderByEmail)
		return res.status(400).send({
			errors: ['Credenciales incorrectas'],
		});

	const checkPassword = await bidderByEmail.validPassword(
		password,
		bidderByEmail.password
	);

	if (!checkPassword)
		return res.status(400).send({
			errors: ['Credenciales incorrectas'],
		});

	const jwtConstructor = new SignJWT({ id: bidderByEmail.id });
	const encoder = new TextEncoder();
	const jwt = await jwtConstructor
		.setProtectedHeader({
			alg: 'HS256',
			typ: 'JWT',
		})
		.setIssuedAt()
		.setExpirationTime('7d')
		.sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

	return res.send({ jwt });
};

export default bidderLoginController;
