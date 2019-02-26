import * as beverageActions from './beverages.actions';
import * as userActions from './user.actions';
import * as cartActions from './cart.actions';

export default {
	beverageActions: { ...beverageActions },
	userActions: { ...userActions },
	cartActions: { ...cartActions },
};
