import { combineReducers } from 'redux';

import beverages from './beverages';
import user from './user';
import errors from './errors';
import isFetching from './isFetching';
import cart from './cart';
import order from './order';
import locale from './locale';

export default combineReducers({
	beverages,
	user,
	errors,
	isFetching,
	cart,
	order,
	locale,
});
