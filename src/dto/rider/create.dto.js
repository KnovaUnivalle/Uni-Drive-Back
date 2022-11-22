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
	documentDTOSchema,
	idDTOSchema,
} from '../dtoTypes.js';

const RiderCreateDTOSchema = Type.Object(
	{
		email: emailDTOSchema,
		password: passwordDTOSchema,
		firstName: firstNameDTOSchema,
		lastName: lastNameDTOSchema,
		birthDate: dateDTOSchema,
		number: numberPhoneDTOSchema,
		document: documentDTOSchema,
		city: idDTOSchema,
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

const validateSchema = ajv.compile(RiderCreateDTOSchema);

//validate body
const riderCreateDTO = (req, res, next) => {
	const isDTOValid = validateSchema(req.body);

	if (!isDTOValid)
		return res.status(400).send({
			errors: validateSchema.errors.map(error => error.message),
		});

	next();
};

export default riderCreateDTO;
