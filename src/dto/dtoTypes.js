import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.Integer({
	errorMessage: {
		type: 'El tipo del id no es válido, debe ser un entero',
	},
});

export const emailDTOSchema = Type.String({
	format: 'email',
	errorMessage: {
		type: 'El tipo del email no es válido, debe ser una cadena de caracteres',
		format: 'El formato del email no es válido, debe cumplir el RFC 5322',
	},
});

export const passwordDTOSchema = Type.String({
	format: 'password',
	minLength: 10,
	maxLength: 25,
	errorMessage: {
		type: 'El tipo de la contraseña no es válido, debe ser una cadena de caracteres',
		format:
			'El formato de la contraseña no es válido, debe contener una mayúscula, una minúscula y un número',
		minLength: 'La contraseña debe tener al menos 10 caracteres de longitud',
		maxLength: 'La contraseña debe tener como máximo 25 caracteres de longitud',
	},
});

export const firstNameDTOSchema = Type.String({
	errorMessage: {
		type: 'El tipo de los nombres debe ser una cadena de caracteres',
	},
});

export const lastNameDTOSchema = Type.String({
	errorMessage: {
		type: 'El tipo de los apellidos debe ser una cadena de caracteres',
	},
});

export const numberPhoneDTOSchema = Type.String({
	minLength: 10,
	maxLength: 10,
	errorMessage: {
		type: 'El tipo del teléfono debe de ser una cadena de caracteres',
		minLength: 'La placa debe tener al menos 10 caracteres de longitud',
		maxLength: 'La placa debe tener como máximo 10 caracteres de longitud',
	},
});

export const dateDTOSchema = Type.String({
	format: 'date',
	errorMessage: {
		type: 'El tipo de la fecha debe de ser una cadena de caracteres',
		format:
			'El formato de la fecha no es válido, debe ser en formato YYYY-MM-DD (RFC3339)',
	},
});

export const dateTimeDTOSchema = Type.String({
	format: 'date-time',
	errorMessage: {
		type: 'El tipo de la fecha debe de ser una cadena de caracteres',
		format:
			'El formato de la fecha no es válido, debe ser en formato YYYY-MM-DDThh:mmTZD (RFC3339)',
	},
});

export const documentDTOSchema = Type.String({
	errorMessage: {
		type: 'El tipo de los nombres debe ser una cadena de caracteres',
	},
});

export const availableDTOSchema = Type.Integer({
	minimum: 1,
	maximum: 10,
	errorMessage: {
		type: 'El tipo del cupoo debe de ser un entero',
		minimum: 'El cupo minimo debe ser al menos 1',
		maximum: 'El cupo maximo debe ser 10',
	},
});

export const plateDTOSchema = Type.String({
	format: 'plate',
	minLength: 6,
	maxLength: 6,
	errorMessage: {
		type: 'El tipo de la placa no es válido, debe ser una cadena de caracteres',
		format:
			'El formato de la placa no es válido, debe contener 3 letras luego 2 números y por ultimo una letra o número',
		minLength: 'La placa debe tener al menos 6 caracteres de longitud',
		maxLength: 'La placa debe tener como máximo 6 caracteres de longitud',
	},
});

export const dayDTOSchema = Type.Integer({
	minimum: 1,
	maximum: 7,
	errorMessage: {
		type: 'El tipo del día debe ser un entero',
		minimum: 'El día debe ser al menos 1',
		maximum: 'El día debe ser máximo 7',
	},
});

export const descriptionDTOSchema = Type.String({
	maxLength: 255,
	errorMessage: {
		type: 'El tipo de la descripción no es válido, debe ser una cadena de caracteres',
		maxLength:
			'La descripción debe tener como máximo 255 caracteres de longitud',
	},
});

export const meetPointDTOSchema = Type.String({
	maxLength: 255,
	errorMessage: {
		type: 'El tipo del punto de encuentro no es válido, debe ser una cadena de caracteres',
		maxLength:
			'El punto de encuentro debe tener máximo 255 caracteres de longitud',
	},
});

export const rateDTOSchema = Type.Integer({
	minimum: 0,
	errorMessage: {
		type: 'El tipo de la tarifa debe de ser un entero',
		minimum: 'La tarifa debe tener un valor positivo',
	},
});

export const toUniversityDTOSchema = Type.Boolean({
	errorMessage: {
		type: 'El tipo de a la universidad debe ser boleano',
	},
});
