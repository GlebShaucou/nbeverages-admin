import jwtDecode from 'jwt-decode';

import * as constants from '../constants';

export const decodeJwtToken = token => jwtDecode(token);
export const getDeliveryMethods = () => ([
	{
		value: '',
		label: 'Выберите способ доставки',
	},
	{
		value: 'delivery',
		label: 'Доставка',
	},
	{
		value: 'pickup',
		label: 'Самовывоз',
	},
]);
export const getPickupAddresses = () => ([
	{
		value: '',
		label: 'Выберите адрес',
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
		label: 'Выберите способ оплаты',
	},
	{
		value: 'cash',
		label: 'Наличные',
	},
	{
		value: 'creditCard',
		label: 'Карта',
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

export const getBeverageCategories = () => ([
	{
		value: '',
		label: 'Выберите категорию напитка',
	},
	{
		value: 'tea',
		label: 'Чай',
	},
	{
		value: 'coffee',
		label: 'Кофе',
	},
]);

export const getBeverageTypes = () => ([
	{
		value: '',
		label: 'Выберите тип напитка',
	},
	{
		value: 'green',
		label: 'Зеленый',
	},
	{
		value: 'black',
		label: 'Черный',
	},
	{
		value: 'red',
		label: 'Красный',
	},
	{
		value: 'herbal',
		label: 'Травяной',
	},
	{
		value: 'arabic',
		label: 'Арабика',
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

export const getPackingUnits = () => ([
	{
		value: '',
		label: 'Выберите фасовку',
	},
	{
		value: 'gram',
		label: 'Граммы',
	},
]);
