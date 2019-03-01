import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Input, Button } from '../../components';

const LoginPage = (props) => {
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		document.title = 'Login | Natural Beverages';
	}, []);

	const onLogin = (e) => {
		e.preventDefault();

		props.onLogin({ ...state });
	};

	const onInputChange = ({ target }) => {
		setState(prevState => ({
			...prevState,
			[target.name]: target.value,
		}));
	};

	const {
		email,
		password,
	} = state;
	const { user } = props;

	if (user) {
		return (
			<Redirect to="/" />
		);
	}

	return (
		<div className="page-component page-component--login">
			<form
				action=""
				onSubmit={onLogin}
				className="login-page__form"
			>
				<Input
					label="Email"
					type="email"
					placeholder="Email"
					className="login-page-form__input"
					name="email"
					onChange={onInputChange}
					value={email}
				/>
				<Input
					label="Password"
					type="password"
					placeholder="Password"
					className="login-page-form__input"
					name="password"
					onChange={onInputChange}
					value={password}
				/>
				<Button
					type="submit"
					caption="Login"
					className="login-page-form__button"
				/>
			</form>
		</div>
	);
}

LoginPage.propTypes = {
	onLogin: PropTypes.func,
	user: PropTypes.object,
};

LoginPage.defaultProps = {
	onLogin: () => {},
	user: null,
};

export default LoginPage;
