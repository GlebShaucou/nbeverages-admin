import * as beverageActions from './beverages.actions';
import * as userActions from './user.actions';
import * as cartActions from './cart.actions';
import * as orderActions from './order.actions';
import * as errorsActions from './errors.actions';
import * as isFetchingActions from './isFetching.actions';
import * as localeActions from './locale.actions';

export default {
	beverageActions: { ...beverageActions },
	userActions: { ...userActions },
	cartActions: { ...cartActions },
	orderActions: { ...orderActions },
	errorsActions: { ...errorsActions },
	isFetchingActions: { ...isFetchingActions },
	localeActions: { ...localeActions },
};
