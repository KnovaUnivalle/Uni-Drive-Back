import Bidder from '../../schemas/bidder.schema.js';

/**
 * Create a bidder in database
 * @param {Object} req
 * @param {Object} res
 * @returns status and message
 */
const bidderCreateController = async (req, res, next) => {
	const {
		firstName,
		lastName,
		email,
		password,
		birthDate,
		number,
		document,
		city,
	} = req.body;

	//create bidder
	const bidder = await Bidder.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		birthDate: birthDate,
		numberPhone: number,
		document: document,
		CityID: city,
	});

	req.id = bidder.id;

	next();
};

export default bidderCreateController;
