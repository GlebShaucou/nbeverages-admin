import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
	const {
		caption,
		onClick,
		type,
		className,
	} = props;

	return (
		<div className="custom-button-wrapper">
			<button
				type={type}
				className={`custom-button ${className}`}
				onClick={onClick}
			>
				{caption}
			</button>
		</div>
	);
}

Button.propTypes = {
	caption: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	caption: '',
	className: '',
	type: 'button',
	onClick: () => {},
};
