import actions from '../../actions';

const {
	beverageActions,
	userActions,
	orderActions,
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
	case beverageActions.FETCH_BEVERAGES_FAILED:
	case beverageActions.DELETE_BEVERAGE_FAILED:
	case beverageActions.ADD_NEW_BEVERAGE_FAILED:
	case beverageActions.UPDATE_BEVERAGE_FAILED:
	case beverageActions.FETCH_BEVERAGES_SUCCEDED:
	case beverageActions.DELETE_BEVERAGE_SUCCEDED:
	case beverageActions.ADD_NEW_BEVERAGE_SUCCEDED:
	case beverageActions.UPDATE_BEVERAGE_SUCCEDED:
	case beverageActions.FETCH_BEVERAGE_BY_ID_SUCCEDED:
	case beverageActions.FETCH_BEVERAGE_BY_ID_FAILED:
	case userActions.USER_LOGIN_SUCCEDED:
	case userActions.USER_LOGIN_FAILED:
	case orderActions.CREATE_ORDER_SUCCEDED:
	case orderActions.CREATE_ORDER_FAILED:
		return false;
	default:
		return state;
	}
};
