/* global fetch */
const metadata = {
	devBaseUrl: 'http://localhost:3003/api/',
	proBaseUrl: 'https://nbeverages-backend.herokuapp.com/api/',
};
const baseUri = process.env.NODE_ENV === 'development' ? metadata.devBaseUrl : metadata.proBaseUrl;

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
	url: `${baseUri}beverages${id ? `/${id}` : ''}`,
});

export const deleteBeverages = ({ beverageId }) => request({
	url: `${baseUri}beverages`,
	params: {
		method: 'DELETE',
		body: { beverageId },
	},
});

export const createBeverage = beverage => request({
	url: `${baseUri}beverages`,
	params: {
		method: 'POST',
		body: { ...beverage },
	},
});

export const updateBeverage = beverage => request({
	url: `${baseUri}beverages`,
	params: {
		method: 'PUT',
		body: { ...beverage },
	},
});

export const login = user => request({
	url: `${baseUri}users/login`,
	params: {
		method: 'POST',
		body: { user },
	},
});
