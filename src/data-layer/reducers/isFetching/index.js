import actions from '../../actions';

const {
	beverageActions,
	userActions,
	orderActions,
	errorsActions,
} = actions;
const isFetching = false;

export default (state = isFetching, action) => {
	switch (action.type) {
	case beverageActions.FETCH_BEVERAGES:
	case beverageActions.DELETE_BEVERAGE:
	case beverageActions.ADD_NEW_BEVERAGE:
	case beverageActions.UPDATE_BEVERAGE:
	case beverageActions.FETCH_BEVERAGE_BY_ID:
	case userActions.USER_LOGIN:
	case orderActions.CREATE_ORDER:
		return true;
	case beverageActions.FETCH_BEVERAGES_SUCCEDED:
	case beverageActions.DELETE_BEVERAGE_SUCCEDED:
	case beverageActions.ADD_NEW_BEVERAGE_SUCCEDED:
	case beverageActions.UPDATE_BEVERAGE_SUCCEDED:
	case beverageActions.FETCH_BEVERAGE_BY_ID_SUCCEDED:
	case userActions.USER_LOGIN_SUCCEDED:
	case orderActions.CREATE_ORDER_SUCCEDED:
	case errorsActions.SET_ERRORS:
		return false;
	default:
		return state;
	}
};
