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
	plateDTOSchema,
} from '../dtoTypes.js';

const BidderCreateDTOSchema = Type.Object(
	{
		email: emailDTOSchema,
		password: passwordDTOSchema,
		firstName: firstNameDTOSchema,
		lastName: lastNameDTOSchema,
		birthDate: dateDTOSchema,
		number: numberPhoneDTOSchema,
		document: documentDTOSchema,
		typeVehicle: idDTOSchema,
		brandVehicle: idDTOSchema,
		colorVehicle: idDTOSchema,
		yearVehicle: idDTOSchema,
		plate: plateDTOSchema,
		available: Type.Integer,
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
ajv.addFormat('plate', /^([a-z]|[A-Z]){3}([0-9]){3}/);
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