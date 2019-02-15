import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
	const {
		caption,
		onClick,
	} = props;

	return (
		<div className="custom-button-wrapper">
			<button
				type="button"
				className="custom-button"
				onClick={onClick}
			>
				{caption}
			</button>
		</div>
	);
}

Button.propTypes = {
	caption: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	caption: '',
	onClick: () => {},
};
