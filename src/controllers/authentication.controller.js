import { jwtVerify } from 'jose';

/**
 * Check JWT and get payload
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns status and message if is not authorized
 */
const authenticationController = async (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	const jwt = authorization.split(' ')[0];

	if (!jwt) return res.status(401).send({ errors: ['Usuario no autorizado'] });

	try {
		const encoder = new TextEncoder();
		const { payload } = await jwtVerify(
			authorization,
			encoder.encode(process.env.JWT_PRIVATE_KEY)
		);

		req.id = payload.id;
		req.email = payload.email;

		next();
	} catch (error) {
		return res.status(401).send({ errors: ['Usuario no autorizado'] });
	}
};

export default authenticationController;
