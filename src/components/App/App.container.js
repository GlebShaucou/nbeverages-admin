import { connect } from 'react-redux';
import App from './App.component';

const mapStateToProps = (state) => {
	const { beverages: { isFetching } } = state;

	return {
		isFetching,
	};
};

export default connect(
	mapStateToProps,
)(App);
