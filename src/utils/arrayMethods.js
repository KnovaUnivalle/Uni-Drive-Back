/**
 * transforms a list of objects with ids into a list of ids
 * @param {Array} arr
 * @returns array
 */
export const arrayObjectsToArrayIds = lst =>
	lst.reduce((arr, cur) => {
		cur.id ? arr.push(cur.id) : null;
		return arr;
	}, []);

export const formatActiveReport = (active, noActive) => [
	{ x: 1, y: active, label: 'Activo' },
	{ x: active, y: noActive, label: 'No Activo' },
];

export const formatToUniversityReport = (toUniversity, noToUniversity) => [
	{ x: 1, y: toUniversity, label: 'Universidad' },
	{ x: toUniversity, y: noToUniversity, label: 'Otro destino' },
];

export const formatFrequentReport = (lst, schema, prop, count = 'count') =>
	lst.reduce((arr, cur) => {
		const data = {
			name: cur[schema][prop],
			count: Number(cur['dataValues'][count]),
		};
		arr.push(data);
		return arr;
	}, []);
