import actions from '../../actions';

const { userActions } = actions;
const userInitState = {
	user: null,
	message: '',
	orders: [],
};

export default (state = userInitState, action) => {
	let response;

	switch (action.type) {
	case userActions.USER_LOGIN_SUCCEDED:
		({ response } = action);
		return {
			...state,
			user: response.user,
			message: '',
		};
	case userActions.USER_LOGOUT_SUCCEDED:
		return userInitState;
	case userActions.USER_CREATE_SUCCEDED:
		return {
			...state,
			message: 'success',
		};
	default:
		return state;
	}
};
