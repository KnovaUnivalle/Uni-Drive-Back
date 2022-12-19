import Bidder from '../../schemas/bidder.schema.js';

/**
 * Check if the user is a bidder
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns if is authorized next, else status and message
 */
const authorizationController = async (req, res, next) => {
	try {
		const { id, email } = req;

		const existingBidder = await Bidder.findOne({
			where: { id: id, email: email },
		});
		if (!existingBidder)
			return res.status(401).send({ errors: ['Usuario no autorizado'] });
		next();
	} catch (error) {
		return res.status(500);
	}
};

export default authorizationController;
