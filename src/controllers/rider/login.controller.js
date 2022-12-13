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
	const jwtConstructor = new SignJWT({
		id: riderByEmail.id,
		email: riderByEmail.email,
	});
	const encoder = new TextEncoder();
	const jwt = await jwtConstructor
		.setProtectedHeader({
			alg: 'HS256',
			typ: 'JWT',
		})
		.setIssuedAt()
		.setExpirationTime('7d')
		.sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
	let d = new Date();
	d.setDate(d.getDate() + 7);

	//cookie settings
	res.cookie('jwt', jwt, {
		expires: d,
		httpOnly: true,
		secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
		sameSite: 'none',
	});

	const user = {
		firstName: riderByEmail.firstName,
		lastName: riderByEmail.lastName,
	};

	return res.send({ jwt, user });
};

export default riderLoginController;
