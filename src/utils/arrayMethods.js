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
	{ x: active, y: noActive, label: 'Activo' },
];
