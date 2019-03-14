import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
	const {
		className,
		label,
		type,
		name,
		...rest
	} = props;

	return (
		<label htmlFor={name} className={`custom-input ${className}`}>
			<span className="custom-input__label">
				{label}
			</span>
			<input
				{...rest}
				name={name}
				type={type}
				className="custom-input__input"
			/>
		</label>
	);
};

Input.propTypes = {
	className: PropTypes.string,
	label: PropTypes.any,
	value: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
};
Input.defaultProps = {
	className: '',
	label: '',
	value: '',
	name: '',
	type: 'text',
	onChange: () => {},
};

export default Input;
