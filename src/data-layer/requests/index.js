/* global fetch */
const metadata = {
	devBaseUrl: 'http://localhost:3003/',
};

export const request = ({
	url,
	config = {
		method: 'GET',
	},
}) => fetch(url, config)
	.then(response => response.json())
	.catch((errro) => { throw errro; });

export const getBeverages = ({ id }) => request({
	url: id ? `${metadata.devBaseUrl}beverages/${id}` : `${metadata.devBaseUrl}beverages`,
});
