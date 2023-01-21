import { arrayObjectsToArrayIds } from '../utils/arrayMethods.js';

describe('arrayObjectsToArrayIds', () => {
	const object = [{ id: 1 }, { id: 2 }, { id: 3 }];
	test('transforms a list of objects with ids into a list of ids', () => {
		expect(arrayObjectsToArrayIds(object)).toStrictEqual([1, 2, 3]);
	});
});

describe('arrayObjectsToArrayIds', () => {
	const object = [{ name: 'pepito' }, { id: 2 }, { id: 3 }];
	test('transforms a list of objects with id into a list of ids', () => {
		expect(arrayObjectsToArrayIds(object)).toStrictEqual([2, 3]);
	});
});

describe('arrayObjectsToArrayIds', () => {
	const object = [{ id: 5 }, { id: 6 }, { id: 10 }];
	test('transforms a list of objects with id into a list of ids', () => {
		expect(arrayObjectsToArrayIds(object)).toStrictEqual([5, 6, 10]);
	});
});

describe('arrayObjectsToArrayIds', () => {
	const object = [{}, {}, { id: 3 }];
	test('transforms a list of objects with id into a list of ids', () => {
		expect(arrayObjectsToArrayIds(object)).toStrictEqual([3]);
	});
});
