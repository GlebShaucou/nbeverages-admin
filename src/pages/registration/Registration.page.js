import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import {
	Input, Button, SelectedItems, Context,
} from '../../components';
import * as constants from '../../constants';
import * as utils from '../../utils';

const RegistrationPage = (props) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const getOnChangeHandler = stateSetter => (e) => { stateSetter(e.target.value); };
	const registrationHandler = (e) => {
		e.preventDefault();

		props.register({
			username, email, password, role: 'user',
		});
	};

	return (
		<Context.Consumer>
			{({ intl: { getTranslation } }) => (
				<div className="page-component page-component--registration">
					<form
						action=""
						onSubmit={registrationHandler}
						className="registration-page__registration-form"
					>
						<Input
							label="Имя пользователя"
							value={username}
							onChange={getOnChangeHandler(setUsername)}
						/>
						<Input
							label="Email"
							value={email}
							onChange={getOnChangeHandler(setEmail)}
						/>
						<Input
							label="Пароль"
							type="password"
							value={password}
							onChange={getOnChangeHandler(setPassword)}
						/>
						<Button
							type="submit"
							caption="Зарегистрироваться"
							className="registration-page__register-button"
						/>
					</form>
				</div>
			)}
		</Context.Consumer>
	);
};

RegistrationPage.propTypes = {
	register: PropTypes.func,
};

RegistrationPage.defaultProps = {
	register: () => {},
};

export default RegistrationPage;
