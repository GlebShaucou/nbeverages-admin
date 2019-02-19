import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';

import Button from '../Button';
import Input from '../Input';

import './NewItemForm.css';

class NewItemForm extends Component {
	state = {
		values: {},
	};

	componentDidMount() {
		const { values } = this.props;

		this.setValues(values);
	}

	componentDidUpdate(prevProps) {
		const { values } = this.props;

		if (!deepEqual(values, prevProps.values)) {
			this.setValues(values);
		}
	}

	setValues = (values) => {
		this.setState({
			values: { ...values },
		});
	};

	onChange = key => (e) => {
		const { value } = e.target;

		this.setState(state => ({
			values: { ...state.values, [key]: value },
		}));
	};

	onSubmit = () => {
		const { onSubmit } = this.props;
		const { values } = this.state;

		onSubmit(values);
	};

	onReset = () => {
		const { onReset } = this.props;

		onReset();
	};

	render() {
		const {
			className,
			schema,
			buttonSubmit,
			buttonReset,
		} = this.props;
		const { values } = this.state;

		return (
			<form
				action=""
				className={`new-beverage-form ${className}`}
				onSubmit={(e) => { e.preventDefault(); }}
			>
				{schema.map((element) => {
					const { name, label } = element;

					return (
						<div
							key={name}
							className={`new-beverage-form__element new-beverage-form__element---${name}`}
						>
							<Input
								label={label}
								name={name}
								value={values[name]}
								onChange={this.onChange(name)}
							/>
						</div>
					);
				})}
				{buttonReset.visible && (
					<Button
						{...buttonReset}
						onClick={this.onReset}
					/>
				)}
				{buttonSubmit.visible && (
					<Button
						{...buttonSubmit}
						onClick={this.onSubmit}
					/>
				)}
			</form>
		);
	}
}

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
