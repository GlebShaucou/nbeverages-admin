import jwtDecode from 'jwt-decode';

export const decodeJwtToken = token => jwtDecode(token);
export const getDeliveryMethods = () => ([
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
		value: 'cash',
		label: 'Cash',
	},
	{
		value: 'creditCard',
		label: 'Credit Cart',
	},
]);
