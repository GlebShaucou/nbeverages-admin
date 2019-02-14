import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

import './EditForm.css';

const EditForm = (props) => {
	const { className, fields } = props;

	return (
		<div className={`edit-form ${className}`}>
			{fields.map((field, index) => (
				<Input key={index} {...field}/>
			))}
		</div>
	);
};

EditForm.propTypes = {
	className: PropTypes.string,
};
EditForm.defaultProps = {
	className: '',
};

export default EditForm;
