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
	    //set expiry to 1 month 
	
	let d = new Date();
	d.setDate(d.getDate() + 7);

    //cookie settings 
    res.cookie('jwt', jwt, {
		expires: d, 
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https', 
        sameSite: 'none'
    });
	req.password = undefined;
	const user = riderByEmail
	return res.status(200).json({
        jwt,
		user
    });
};

export default riderLoginController;
