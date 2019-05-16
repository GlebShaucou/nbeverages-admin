import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';

import './NewBeverageForm.css';

const NewBeverageForm = (props) => {
	const {
		values: valuesFromProps,
		className,
		schema,
		buttonSubmit,
		buttonReset,
	} = props;

	const [values, setValues] = useState({});

	useEffect(() => {
		setValues({
			availablePackaging: [30, 50, 100],
			standartPackaging: 100,
			packingUnit: {
				label: 'г',
				value: 'g',
			},
			standartPackagingPrice: {
				amount: 0,
				currency: {
					label: 'руб',
					value: 'byn',
				},
			},
			...valuesFromProps,
		});
	}, [valuesFromProps]);

	const onChange = key => (e) => {
		let { value } = e.target;

		if (key === 'standartPackagingPrice') {
			value = {
				amount: value,
				currency: {
					label: 'бел. руб.',
					value: 'byn',
				},
			};
		}

		setValues(prevValues => ({ ...prevValues, [key]: value }));
	};

	const onSelect = key => (option) => {
		setValues(prevValues => ({ ...prevValues, [key]: option }));
	};

	const onSubmit = () => {
		props.onSubmit(values);
	};

	const onReset = () => {
		props.onReset();
	};

	return (
		<form
			action=""
			className={`new-beverage-form ${className}`}
			onSubmit={(e) => { e.preventDefault(); }}
		>
			{schema.map((element) => {
				const { name, label, values: selectValues } = element;
				let selectedValue = values[name];

				if (name === 'standartPackagingPrice') {
					selectedValue = values.standartPackagingPrice ? values.standartPackagingPrice.amount : 0;
				}

				if (selectValues && selectValues.length > 0) {
					return (
						<Select
							key={name}
							label={label}
							name={name}
							onChange={onSelect(name)}
							selectedValue={selectedValue}
							options={selectValues}
						/>
					);
				}

				return (
					<Input
						label={label}
						name={name}
						value={selectedValue}
						onChange={onChange(name)}
						key={name}
						className={`new-beverage-form__element new-beverage-form__element---${name}`}
					/>
				);
			})}
			{buttonReset.visible && (
				<Button
					{...buttonReset}
					onClick={onReset}
				/>
			)}
			{buttonSubmit.visible && (
				<Button
					{...buttonSubmit}
					onClick={onSubmit}
				/>
			)}
		</form>
	);
};

NewBeverageForm.propTypes = {
	className: PropTypes.string,
	onSubmit: PropTypes.func,
	onReset: PropTypes.func,
	values: PropTypes.object,
	schema: PropTypes.array,
	buttonSubmit: PropTypes.object,
	buttonReset: PropTypes.object,
};
NewBeverageForm.defaultProps = {
	className: '',
	onSubmit: () => {},
	onReset: () => {},
	values: {},
	schema: [],
	buttonSubmit: { caption: 'Submit', visible: true },
	buttonReset: { visible: false },
};

export default NewBeverageForm;
