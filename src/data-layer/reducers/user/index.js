import actions from '../../actions';

const { userActions } = actions;
const user = null;

export default (state = user, action) => {
	let response;

	switch (action.type) {
	case userActions.USER_LOGIN_SUCCEDED:
		({ response } = action);
		return { ...response.user };
	default:
		return state;
	}
};
