import { connect } from 'react-redux';

import UserAccountPage from './UserAccount.page';
import actions from '../../data-layer/actions';

const {
	userActions,
} = actions;

const mapStateToProps = state => ({
	...state.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	loadData: ({ customerEmail }) => {
		dispatch(userActions.getUserOrders({ customerEmail }));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(UserAccountPage);
