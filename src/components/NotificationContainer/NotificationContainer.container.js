import { connect } from 'react-redux';
import NotificationContainer from './NotificationContainer.component';

const mapStateToProps = state => ({
	errors: state.errors,
});

export default connect(
	mapStateToProps,
)(NotificationContainer);
