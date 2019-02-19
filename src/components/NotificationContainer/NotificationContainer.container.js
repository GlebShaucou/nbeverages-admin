import { connect } from 'react-redux';
import NotificationContainer from './NotificationContainer.component';

const mapStateToProps = (state) => {
	const { beverages } = state;
	const { error } = beverages;
	const errors = [];

	if (error) {
		errors.push(error);
	}

	return {
		errors,
	};
};

export default connect(
	mapStateToProps,
)(NotificationContainer);
