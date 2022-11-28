import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { activeDTOSchema, descriptionDTOSchema } from '../dtoTypes.js';

const attributeDTOSchema = Type.Object(
	{
		description: descriptionDTOSchema,
		active: activeDTOSchema,
	},
	{
		additionalProperties: false,
		errorMessage: {
			additionalProperties: 'El formato del objeto no es válido',
		},
	}
);

const ajv = new Ajv({ allErrors: true })
	.addKeyword('kind')
	.addKeyword('modifier');

addFormats(ajv);
addErrors(ajv);

const validateSchema = ajv.compile(attributeDTOSchema);

/**
 * Check the body of the request
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns status and message if is not valid
 */
const attributeDTO = (req, res, next) => {
	const isDTOValid = validateSchema(req.body);

	if (!isDTOValid)
		return res.status(400).send({
			errors: validateSchema.errors.map(error => error.message),
		});

	next();
};

export default attributeDTO;
