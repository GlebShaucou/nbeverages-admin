import actions from '../../actions';

const {
	errorsActions,
} = actions;
const errors = [];

const getErrors = (action) => {
	const { response, error: errorFromAction } = action;
	const error = errorFromAction || response ? response.error : '';

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
	case errorsActions.SET_ERRORS:
		return getErrors(action);
	default:
		return state;
	}
};
