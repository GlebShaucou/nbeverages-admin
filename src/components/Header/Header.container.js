import { connect } from 'react-redux';
import Header from './Header.component';

import actions from '../../data-layer/actions';

const { userActions, localeActions } = actions;

const mapStateToProps = state => ({
	user: state.user.user,
	cart: state.cart,
	locales: state.locale.locales,
});

const mapDispatchToProps = dispatch => ({
	onLogout: () => {
		dispatch(userActions.userLogout());
	},
	setLocale: (locale) => {
		dispatch(localeActions.setLocale(locale));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
