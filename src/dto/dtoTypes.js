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
		minLength: 'El teléfono debe tener un tamaño de 10 caracteres de longitud',
		maxLength: 'El teléfono debe tener un tamaño de 10 caracteres de longitud',
	},
});

export const dateDTOSchema = Type.String({
	format: 'date',
	errorMessage: {
		type: 'El tipo de la fecha debe de ser una cadena de caracteres',
		format:
			'El formato de la fecha no es válido, debe ser en formato YYYY-MM-DD',
	},
});

export const dateTimeDTOSchema = Type.String({
	format: 'date-time',
	errorMessage: {
		type: 'El tipo de la fecha de nacimiento debe de ser una cadena de caracteres',
		format:
			'El formato de la contraseña no es válido, debe ser en formato YYYY-MM-DDThh:mmTZD',
	},
});

export const documentDTOSchema = Type.String({
	errorMessage: {
		type: 'El tipo de los nombres debe ser una cadena de caracteres',
	},
});

export const availableDTOSchema = Type.Integer({
	errorMessage: {
		type: 'El tipo de los cupos disponibles debe ser una cadena de caracteres',
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
		type: 'El tipo del día debe ser una cadena de caracteres',
		minimum: 'El día debe ser al menos 1',
		maximum: 'El día debe ser máximo 7',
	},
});
