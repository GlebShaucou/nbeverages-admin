import jwtDecode from 'jwt-decode';

import * as constants from '../constants';

export const decodeJwtToken = token => jwtDecode(token);
export const getDeliveryMethods = getTranslation => ([
	{
		value: '',
		label: getTranslation({ id: constants.DELIVERY_METHODS_PLACEHOLDER }),
	},
	{
		value: 'delivery',
		label: getTranslation({ id: constants.DELIVERY_METHODS_DELIVERY }),
	},
	{
		value: 'pickup',
		label: getTranslation({ id: constants.DELIVERY_METHODS_PICKUP }),
	},
]);
export const getPickupAddresses = getTranslation => ([
	{
		value: '',
		label: getTranslation({ id: constants.PICKUP_ADDRESS_PLACEHOLDER }),
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
export const getPaymentMethods = getTranslation => ([
	{
		value: '',
		label: getTranslation({ id: constants.PAYMENT_METHODS_PLACEHOLDER }),
	},
	{
		value: 'cash',
		label: getTranslation({ id: constants.PAYMENT_METHODS_CASH }),
	},
	{
		value: 'creditCard',
		label: getTranslation({ id: constants.PAYMENT_METHODS_CREDIT_CARD }),
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

export const getTotalPrice = ({
	items,
}) => items.reduce((total, { price, quantity }) => total + (+price * quantity), 0);
