import { SignJWT } from 'jose';
import Rider from '../../schemas/rider.schema.js';

const riderLoginController = async (req, res) => {
	const { email, password } = req.body;

	//validate email
	const riderByEmail = await Rider.findOne({ where: { email: email } });
	if (!riderByEmail)
		return res.status(400).send({
			errors: ['Credenciales incorrectas'],
		});

	//validate password
	const checkPassword = await riderByEmail.validPassword(
		password,
		riderByEmail.password
	);

	if (!checkPassword)
		return res.status(400).send({
			errors: ['Credenciales incorrectas'],
		});

	// create and send jwt
	const jwtConstructor = new SignJWT({ id: riderByEmail.id });
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

export default riderLoginController;
