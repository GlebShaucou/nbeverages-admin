import { connect } from 'react-redux';
import Header from './Header.component';

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(
	mapStateToProps,
)(Header);
