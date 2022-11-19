import { SignJWT } from 'jose';
import Admin from '../../schemas/admin.schema.js';

const adminLoginController = async (req, res) => {
	const { email, password } = req.body;

	//validate email
	const adminByEmail = await Admin.findOne({ where: { email: email } });
	if (!adminByEmail)
		return res.status(400).send({
			errors: ['Credenciales incorrectas'],
		});

	//validate password
	const checkPassword = await adminByEmail.validPassword(
		password,
		adminByEmail.password
	);

	if (!checkPassword)
		return res.status(400).send({
			errors: ['Credenciales incorrectas'],
		});

	// create and send jwt
	const jwtConstructor = new SignJWT({ id: adminByEmail.id });
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

export default adminLoginController;
