import { connect } from 'react-redux';

import LoginPage from './Login.page';
import actions from '../../data-layer/actions';

const { userActions } = actions;

const mapStateToProps = state => ({
	user: state.user,
});

const mapDispatchToProps = dispatch => ({
	onLogin: (user) => {
		dispatch(userActions.userLogin(user));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginPage);
