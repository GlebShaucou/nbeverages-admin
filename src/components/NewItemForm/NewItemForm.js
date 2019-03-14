import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Input from '../Input';

import './NewItemForm.css';

const NewItemForm = (props) => {
	const {
		values: valuesFromProps,
		className,
		schema,
		buttonSubmit,
		buttonReset,
	} = props;

	const [values, setValues] = useState({});

	useEffect(() => {
		setValues(valuesFromProps);
	}, [valuesFromProps]);

	const onChange = key => (e) => {
		const { value } = e.target;

		setValues(prevValues => ({ ...prevValues, [key]: value }));
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
				const { name, label } = element;

				return (
					<Input
						label={label}
						name={name}
						value={values[name]}
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

NewItemForm.propTypes = {
	className: PropTypes.string,
	onSubmit: PropTypes.func,
	onReset: PropTypes.func,
	values: PropTypes.object,
	schema: PropTypes.array,
	buttonSubmit: PropTypes.object,
	buttonReset: PropTypes.object,
};
NewItemForm.defaultProps = {
	className: '',
	onSubmit: () => {},
	onReset: () => {},
	values: {},
	schema: [],
	buttonSubmit: { caption: 'Submit', visible: true },
	buttonReset: { visible: false },
};

export default NewItemForm;
