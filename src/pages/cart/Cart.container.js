import { connect } from 'react-redux';
import CartPage from './Cart.page';

const mapStateToProps = state => ({
	cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CartPage);
