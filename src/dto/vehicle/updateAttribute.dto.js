import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import {
	activeDTOSchema,
	descriptionDTOSchema,
	idDTOSchema,
} from '../dtoTypes.js';

const updateAttributeDTOSchema = Type.Object(
	{
		attribute: idDTOSchema,
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

const validateSchema = ajv.compile(updateAttributeDTOSchema);

//validate body
const updateAttributeDTO = (req, res, next) => {
	const isDTOValid = validateSchema(req.body);

	if (!isDTOValid)
		return res.status(400).send({
			errors: validateSchema.errors.map(error => error.message),
		});

	next();
};

export default updateAttributeDTO;
