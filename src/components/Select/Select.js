import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
	const {
		name,
		label,
		options,
		onChange,
		selectedValue,
	} = props;

	const onOptionSelect = (e) => {
		const { value } = e.target;

		const selectedOption = options.find(option => option.value === value);

		onChange(selectedOption);
	};

	return (
		<span className="custom-select">
			<span className="custom-select__label">
				{label}
			</span>
			<select
				value={selectedValue.value}
				name={name}
				onChange={onOptionSelect}
				className="custom-select__select"
			>
				{options.map((option) => {
					const { value: optionValue, label: optionLabel } = option;

					return (
						<option value={optionValue} key={optionValue}>
							{optionLabel}
						</option>
					);
				})}
			</select>
		</span>
	);
};

Select.propTypes = {
	options: PropTypes.array,
	name: PropTypes.string,
	label: PropTypes.any,
	selectedValue: PropTypes.object,
	getValue: PropTypes.func,
	onChange: PropTypes.func,
};

Select.defaultProps = {
	options: [],
	name: 'select',
	label: '',
	selectedValue: {},
	getValue: () => {},
	onChange: () => {},
};

export default Select;
