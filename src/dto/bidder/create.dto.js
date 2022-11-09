import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';
import {
	emailDTOSchema,
	passwordDTOSchema,
	firstNameDTOSchema,
	lastNameDTOSchema,
	dateDTOSchema,
	numberPhoneDTOSchema,
} from '../dtoTypes.js';

const BidderCreateDTOSchema = Type.Object(
	{
		email: emailDTOSchema,
		password: passwordDTOSchema,
		firstName: firstNameDTOSchema,
		lastName: lastNameDTOSchema,
		birthDate: dateDTOSchema,
		number: numberPhoneDTOSchema,
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

ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['email', 'date']);
addErrors(ajv);

const validateSchema = ajv.compile(BidderCreateDTOSchema);

//validate body
const bidderCreateDTO = (req, res, next) => {
	const isDTOValid = validateSchema(req.body);

	if (!isDTOValid)
		return res.status(400).send({
			errors: validateSchema.errors.map(error => error.message),
		});

	next();
};

export default bidderCreateDTO;
