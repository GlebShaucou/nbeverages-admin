import actions from '../../actions';

const {
	isFetchingActions,
} = actions;
const isFetching = false;

export default (state = isFetching, action) => {
	switch (action.type) {
	case isFetchingActions.SET_FETCHING_STATUS:
		return action.isFetching;
	default:
		return state;
	}
};
