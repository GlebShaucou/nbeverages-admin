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

export const getBeverageCategories = getTranslation => ([
	{
		value: '',
		label: getTranslation({ id: constants.BEVERAGE_CATEGORY_SELECT_PLACEHOLDER }),
	},
	{
		value: 'tea',
		label: getTranslation({ id: constants.BEVERAGE_CATEGORY_TEA }),
	},
	{
		value: 'coffee',
		label: getTranslation({ id: constants.BEVERAGE_CATEGORY_COFFEE }),
	},
]);

export const getBeverageTypes = getTranslation => ([
	{
		value: '',
		label: getTranslation({ id: constants.BEVERAGE_TYPES_SELECT_PLACEHOLDER }),
	},
	{
		value: 'green',
		label: getTranslation({ id: constants.BEVERAGE_TYPES_GREEN }),
	},
	{
		value: 'black',
		label: getTranslation({ id: constants.BEVERAGE_TYPES_BLACK }),
	},
	{
		value: 'red',
		label: getTranslation({ id: constants.BEVERAGE_TYPES_RED }),
	},
	{
		value: 'herbal',
		label: getTranslation({ id: constants.BEVERAGE_TYPES_HERBAL }),
	},
	{
		value: 'arabic',
		label: getTranslation({ id: constants.BEVERAGE_TYPES_ARABIC }),
	},
]);

export const getCurrencies = getTranslation => ([
	{
		value: '',
		label: getTranslation({ id: constants.CURRENCY_SELECT_PLACEHOLDER }),
	},
	{
		value: 'byn',
		label: getTranslation({ id: constants.CURRENCY_BYN }),
	},
	{
		value: 'usd',
		label: getTranslation({ id: constants.CURRENCY_USD }),
	},
]);

export const getStringTranslation = (label, getTranslation) => {
	const translationId = {
		tea: constants.BEVERAGE_CATEGORY_TEA,
		herbal: constants.BEVERAGE_TYPES_HERBAL,
		byn: constants.CURRENCY_BYN,
		usd: constants.CURRENCY_USD,
	}[label];

	return translationId ? getTranslation({ id: translationId }) : label;
};
