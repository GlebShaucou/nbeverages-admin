import { connect } from 'react-redux';
import App from './App.component';

const mapStateToProps = state => ({
	isFetching: state.isFetching,
	locale: state.locale.selectedLocale,
});

export default connect(
	mapStateToProps,
)(App);
