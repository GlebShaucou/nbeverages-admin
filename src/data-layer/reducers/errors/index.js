import actions from '../../actions';
import {FETCH_BEVERAGE_BY_ID_FAILED} from "../../actions/beverages.actions";

const {
	beverageActions,
	userActions,
} = actions;
const errors = [];

const getErrors = (action) => {
	const { response } = action;
	const error = action.error || response.error;

	if (!error) {
		return [];
	}

	if (Array.isArray(error)) {
		return [...error];
	}

	return [error];
};

export default (state = errors, action) => {
	switch (action.type) {
	case beverageActions.FETCH_BEVERAGES_FAILED:
	case beverageActions.DELETE_BEVERAGE_FAILED:
	case beverageActions.ADD_NEW_BEVERAGE_FAILED:
	case beverageActions.UPDATE_BEVERAGE_FAILED:
	case beverageActions.FETCH_BEVERAGES_SUCCEDED:
	case beverageActions.DELETE_BEVERAGE_SUCCEDED:
	case beverageActions.ADD_NEW_BEVERAGE_SUCCEDED:
	case beverageActions.UPDATE_BEVERAGE_SUCCEDED:
	case beverageActions.FETCH_BEVERAGE_BY_ID_FAILED:
	case userActions.USER_LOGIN_SUCCEDED:
	case userActions.USER_LOGIN_FAILED:
		return getErrors(action);
	default:
		return state;
	}
};
