import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
	const {
		name,
		label,
		values,
		onChange,
		selectedValue,
	} = props;

	return (
		<span className="custom-select">
			<span className="custom-select__label">
				{label}
			</span>
			<select
				value={selectedValue}
				name={name}
				onChange={onChange}
				className="custom-select__select"
			>
				{values.map((value) => {
					const { value: optionValue } = value;

					return (
						<option value={optionValue} key={optionValue}>
							{value.label}
						</option>
					);
				})}
			</select>
		</span>
	);
};

Select.propTypes = {
	values: PropTypes.array,
	name: PropTypes.string,
	label: PropTypes.string,
	selectedValue: PropTypes.string,
	onChange: PropTypes.func,
};

Select.defaultProps = {
	values: [],
	name: 'select',
	label: '',
	selectedValue: '',
	onChange: () => {},
};

export default Select;
