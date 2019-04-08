import { connect } from 'react-redux';

import RegistrationPage from './Registration.page';
import actions from '../../data-layer/actions';

const {
	userActions,
} = actions;

const mapStateToProps = (state) => ({
	...state.user,
});

const mapDispatchToProps = (dispatch) => ({
	register: (user) => {
		dispatch(userActions.createUser(user));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(RegistrationPage);
