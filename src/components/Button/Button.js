import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const {
		caption,
		onClick,
		type,
		className,
	} = props;

	return (
		<button
			type={type}
			className={`custom-button ${className}`}
			onClick={onClick}
		>
			{caption}
		</button>
	);
};

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

export default Button;
