import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../../components';

export default class LoginPage extends Component {
	state = {
		email: '',
		password: '',
	};

	onLogin = (e) => {
		e.preventDefault();
	};

	onInputChange = ({ target }) => {
		this.setState({
			[target.name]: target.value,
		});
	};

	render() {
		const {
			email,
			password,
		} = this.state;

		return (
			<div className="page-component page-component--login">
				<h2 className="login-page__header">
					Login
				</h2>
				<form
					action=""
					onSubmit={this.onLogin}
					className="login-page__form"
				>
					<Input
						type="email"
						placeholder="Email"
						className="login-page-form__input"
						name="email"
						onChange={this.onInputChange}
						value={email}
					/>
					<Input
						type="password"
						placeholder="Password"
						className="login-page-form__input"
						name="password"
						onChange={this.onInputChange}
						value={password}
					/>
					<Button
						type="submit"
						caption="Login"
					/>
				</form>
			</div>
		);
	}
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};
