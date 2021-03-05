export const walkObject = (object = {}, head = ''): string[] => {
	return Object.entries(object).reduce((product, [key, value]: [string, object | string]) => {
		const path = head ? `${head}.${key}` : key;

		if (value.toString() === '[object Object]') {
			return product.concat(walkObject(value, path));
		}

		return product.concat(`${path}.${value}`);
	}, []);
};
