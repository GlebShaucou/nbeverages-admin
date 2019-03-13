import jwtDecode from 'jwt-decode';

export const decodeJwtToken = token => jwtDecode(token);
export const getDeliveryMethods = () => ([
	{
		value: '',
		label: 'Select delivery method...',
	},
	{
		value: 'delivery',
		label: 'Delivery',
	},
	{
		value: 'pickup',
		label: 'Pickup',
	},
]);
export const getPickupAddresses = () => ([
	{
		value: '',
		label: 'Select pickup address...',
	},
	{
		value: 'Minsk, ave. Gazety Zvyazda, 37',
		label: 'Minsk, ave. Gazety Zvyazda, 37',
	},
	{
		value: 'Minsk, ave. Gazety Zvyazda, 35',
		label: 'Minsk, ave. Gazety Zvyazda, 35',
	},
	{
		value: 'Minsk, ave. Gazety Zvyazda, 33',
		label: 'Minsk, ave. Gazety Zvyazda, 33',
	},
]);
export const getPaymentMethods = () => ([
	{
		value: '',
		label: 'Select payment method...',
	},
	{
		value: 'cash',
		label: 'Cash',
	},
	{
		value: 'creditCard',
		label: 'Credit Cart',
	},
]);
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const generateOrderId = (length, orderId = []) => {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charsLength = chars.length;

	if (orderId.length < length) {
		return generateOrderId(
			length,
			[...orderId, chars[getRandomInt(0, charsLength)]],
		);
	}

	return orderId.join('').toUpperCase();
};
