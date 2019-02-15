import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Button from '../Button';

import './EditForm.css';

const EditForm = (props) => {
	const { className, fields, onSave } = props;

	return (
		<div className={`edit-form ${className}`}>
			{fields.map(field => (
				<Input key={JSON.stringify(field)} {...field} />
			))}
			<Button
				caption="Add"
				onClick={onSave}
			/>
		</div>
	);
};

EditForm.propTypes = {
	className: PropTypes.string,
	fields: PropTypes.array,
	onSave: PropTypes.func,
};
EditForm.defaultProps = {
	className: '',
	fields: [],
	onSave: () => {},
};

export default EditForm;
