import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import { activeDTOSchema, descriptionDTOSchema } from '../dtoTypes.js';

const createAttributeDTOSchema = Type.Object(
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

const validateSchema = ajv.compile(createAttributeDTOSchema);

//validate body
const createAttributeDTO = (req, res, next) => {
	const isDTOValid = validateSchema(req.body);

	if (!isDTOValid)
		return res.status(400).send({
			errors: validateSchema.errors.map(error => error.message),
		});

	next();
};

export default createAttributeDTO;
