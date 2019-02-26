import { connect } from 'react-redux';
import Header from './Header.component';

import actions from '../../data-layer/actions';

const { userActions } = actions;

const mapStateToProps = state => ({
	user: state.user,
	cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
	onLogout: () => {
		dispatch(userActions.userLogout());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
