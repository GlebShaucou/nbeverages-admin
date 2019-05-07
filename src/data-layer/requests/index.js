/* global fetch */
const metadata = {
	devBaseUrl: 'http://localhost:3003/api/',
	proBaseUrl: 'https://nbeverages-backend.herokuapp.com/api/',
};
// const baseUri = process.env.NODE_ENV === 'development' ? metadata.devBaseUrl : metadata.proBaseUrl;
const baseUri = metadata.proBaseUrl;

export const request = ({
	url,
	params = {},
	headers = {},
}) => {
	let config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			...headers,
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

export const getBeverages = ({ id, query }) => {
	let url = `${baseUri}beverages${id ? `/${id}` : ''}`;

	if (query) {
		const queryParams = Object.keys(query);
		const encodedUri = encodeURI(
			queryParams
				.map(param => `${param}=${query[param]}`)
				.join('&'),
		);

		url = `${url}?${encodedUri}`;
	}

	return request({
		url,
	});
};

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

export const createUser = user => request({
	url: `${baseUri}users`,
	params: {
		method: 'POST',
		body: { ...user },
	},
});

export const userLogin = user => request({
	url: `${baseUri}users/login`,
	params: {
		method: 'POST',
		body: { user },
	},
});

export const createOrder = order => request({
	url: `${baseUri}orders`,
	params: {
		method: 'POST',
		body: { ...order },
	},
});

export const getOrders = ({ orderId }) => {
	const url = `${baseUri}orders${orderId ? `/${orderId}` : ''}`;

	return request({
		url,
	});
};

export const deleteOrder = ({ orderId }) => request({
	url: `${baseUri}orders`,
	params: {
		method: 'DELETE',
		body: { orderId },
	},
});

export const updateOrder = ({ order }) => request({
	url: `${baseUri}orders`,
	params: {
		method: 'PUT',
		body: { ...order },
	},
});
