import Bidder from '../../schemas/bidder.schema.js';

/**
 * Check if bidder exists in data base
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
const bidderExistController = async (req, res, next) => {
	const { email, document } = req.body;

	//validate duplicate email
	const bidderByEmail = await Bidder.findOne({ where: { email: email } });
	if (bidderByEmail)
		return res.status(409).send({
			errors: ['Ya existe un conductor con ese email registrado'],
		});

	//validate duplicate cc
	const bidderByDocument = await Bidder.findOne({
		where: { document: document },
	});
	if (bidderByDocument)
		return res.status(409).send({
			errors: ['Ya existe un conductor con ese documento registrado'],
		});

	next();
};

export default bidderExistController;
