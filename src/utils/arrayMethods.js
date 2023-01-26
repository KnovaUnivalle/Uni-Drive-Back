/**
 * transforms a list of objects with ids into a list of ids
 * @param {Array} arr
 * @returns array
 */
export const arrayObjectsToArrayIds = arr =>
	arr.reduce((prev, cur) => {
		cur.id ? prev.push(cur.id) : null;
		return prev;
	}, []);

export const formatActiveReport = (active, noActive) => [
	{ x: 1, y: active, label: 'Activo' },
	{ x: active, y: noActive, label: 'No Activo' },
];

export const formatToUniversityReport = (toUniversity, noToUniversity) => [
	{ x: 1, y: toUniversity, label: 'Universidad' },
	{ x: toUniversity, y: noToUniversity, label: 'Otro destino' },
];
