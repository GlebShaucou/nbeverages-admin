import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Input, Button, Context } from '../../components';
import * as constants from '../../constants';

const LoginPage = (props) => {
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		document.title = 'Login | Tea City';
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
			<Context.Consumer>
				{({ intl: { getTranslation } }) => (
					<form
						action=""
						onSubmit={onLogin}
						className="login-page__form"
					>
						<Input
							type="email"
							placeholder={getTranslation({ id: constants.SHOPPING_CART_EMAIL })}
							className="login-page-form__input"
							name="email"
							onChange={onInputChange}
							value={email}
						/>
						<Input
							type="password"
							placeholder={getTranslation({ id: constants.LOGIN_PASSWORD })}
							className="login-page-form__input"
							name="password"
							onChange={onInputChange}
							value={password}
						/>
						<Button
							type="submit"
							caption={(
								<FormattedMessage id={constants.NAVIGATION_LINK_LOGIN} />
							)}
							className="login-page-form__button"
						/>
					</form>
				)}
			</Context.Consumer>
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
