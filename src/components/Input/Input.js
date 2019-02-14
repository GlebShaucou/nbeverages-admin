import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
	const {
		className,
		label,
		type,
		...rest
	} = props;

	return (
		<label className={`custom-input ${className}`}>
			<span className="custom-input__label">
				{label}
			</span>
			<input
				{...rest}
				type={type}
				className="custom-input__input"
			/>
		</label>
	);
};

Input.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
};
Input.defaultProps = {
	className: '',
	label: '',
	value: '',
	type: 'text',
	onChange: () => {},
};

export default Input;
