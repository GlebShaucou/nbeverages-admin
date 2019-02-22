import React from 'react';
import PropTypes from 'prop-types';

const NotificationContainer = (props) => {
	const { errors } = props;

	if (errors.length === 0) {
		return null;
	}

	return (
		<div className="notification-container">
			<h4 className="notification-container__errors-header">Errors:</h4>
			{errors.map(error => (
				<span key={error} className="notification-container__error">
					{JSON.stringify(error)}
				</span>
			))}
		</div>
	);
};

NotificationContainer.propTypes = {
	errors: PropTypes.array,
};

NotificationContainer.defaultProps = {
	errors: [],
};

export default NotificationContainer;
