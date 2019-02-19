/* global fetch */
const metadata = {
	devBaseUrl: 'http://localhost:3003/',
};

export const request = ({
	url,
	params = {},
}) => {
	let config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	};
	let { body, ...rest } = params;

	if (body) {
		body = JSON.stringify(body);
		config = {
			...config,
			body,
		};
	}

	config = {
		...config,
		...rest,
	};

	return fetch(url, config)
		.then(response => response.json())
		.then((data) => {
			const { error } = data;

			if (error) {
				throw error;
			}

			return data;
		})
		.catch((error) => { throw error; });
};

export const getBeverages = ({ id }) => request({
	url: id ? `${metadata.devBaseUrl}beverages/${id}` : `${metadata.devBaseUrl}beverages`,
});

export const deleteBeverages = ({ beverageId }) => request({
	url: `${metadata.devBaseUrl}beverages`,
	params: {
		method: 'DELETE',
		body: { beverageId },
	},
});

export const createBeverage = beverage => request({
	url: `${metadata.devBaseUrl}beverages`,
	params: {
		method: 'POST',
		body: { ...beverage },
	},
});

export const updateBeverage = beverage => request({
	url: `${metadata.devBaseUrl}beverages`,
	params: {
		method: 'PUT',
		body: { ...beverage },
	},
});
