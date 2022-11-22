import { jwtVerify } from 'jose';
import Rider from '../../schemas/rider.schema.js';

const riderTokenController = async (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	try {
		const encoder = new TextEncoder();
		const { payload } = await jwtVerify(
			authorization,
			encoder.encode(process.env.JWT_PRIVATE_KEY)
		);

		req.id = payload.id;
		req.email = payload.email;

		const rider = await Rider.findOne({
			where: { id: req.id, email: req.email },
		});
		if (!rider)
			return res.status(401).send({ errors: ['Usuario no autorizado'] });
		next();
	} catch (error) {
		return res.status(401).send({ errors: ['Usuario no autorizado'] });
	}
};

export default riderTokenController;
