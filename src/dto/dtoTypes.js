import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.Integer({
	errorMessage: {
		type: 'El tipo del id no es válido, debe ser un integer',
	},
});

export const emailDTOSchema = Type.String({
	format: 'email',
	errorMessage: {
		type: 'El tipo del email no es válido, debe ser un string',
		format: 'El formato del email no es válido, debe cumplir el RFC 5322',
	},
});

export const passwordDTOSchema = Type.String({
	format: 'password',
	minLength: 10,
	maxLength: 25,
	errorMessage: {
		type: 'El tipo de la password no es válido, debe ser un string',
		format:
			'El formato de la password, debe contener una mayúscula, una minúscula y un número',
		minLength: 'password debe tener al menos 10 caracteres de longitud',
		maxLength: 'password debe tener como máximo 25 caracteres de longitud',
	},
});
