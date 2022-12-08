import Rider from '../../schemas/rider.schema.js';

/**
 * Check if rider exists in data base
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
const riderCreateController = async (req, res, next) => {
	const { email, document } = req.body;

	//validate duplicate email
	const riderByEmail = await Rider.findOne({ where: { email: email } });
	if (riderByEmail)
		return res.status(409).send({
			errors: ['Ya existe un pasajero con ese email registrado'],
		});

	//validate duplicate cc
	const riderByDocument = await Rider.findOne({
		where: { document: document },
	});
	if (riderByDocument)
		return res.status(409).send({
			errors: ['Ya existe un pasajero con ese documento registrado'],
		});

	next();
};

export default riderCreateController;
