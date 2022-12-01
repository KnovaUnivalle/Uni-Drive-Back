import Admin from '../../schemas/admin.schema.js';

/**
 * Check if the user is a admin
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns if is authorized next, else status and message
 */
const authorizationController = async (req, res, next) => {
	const { id, email } = req;

	const existingAdmin = await Admin.findOne({
		where: { id: id, email: email },
	});
	if (!existingAdmin)
		return res.status(401).send({ errors: ['Usuario no autorizado'] });

	next();
};

export default authorizationController;
