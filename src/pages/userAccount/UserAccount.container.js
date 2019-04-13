import { connect } from 'react-redux';

import UserAccountPage from './UserAccount.page';
import actions from '../../data-layer/actions';

const {
	userActions,
} = actions;

const mapStateToProps = state => ({
	...state.user,
});

const mapDispatchToProps = dispatch => ({
	// register: (user) => {
	// 	dispatch(userActions.createUser(user));
	// },
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(UserAccountPage);
