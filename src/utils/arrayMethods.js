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
