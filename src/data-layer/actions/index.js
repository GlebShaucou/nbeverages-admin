import * as beverageActions from './beverages.actions';
import * as userActions from './user.actions';

export default {
	beverageActions: { ...beverageActions },
	userActions: { ...userActions },
};
