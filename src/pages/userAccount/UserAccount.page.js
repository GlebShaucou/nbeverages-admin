import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import {
	Input, Button, Context,
} from '../../components';
import * as constants from '../../constants';
import * as utils from '../../utils';

const UserAccountPage = (props) => {
	const { user } = props;

	if (!user) {
		return (
			<Redirect to="/login" />
		);
	}

	return (
		<Context.Consumer>
			{({ intl: { getTranslation } }) => (
				<div className="page-component page-component--user-account">
					<div className="user-account__user-name">
						{user.username}
					</div>
					<div className="user-account__user-email">
						{user.email}
					</div>
					<div className="user-account__orders">

					</div>
				</div>
			)}
		</Context.Consumer>
	);
};

UserAccountPage.propTypes = {
	updateUserData: PropTypes.func,
	user: PropTypes.object,
	message: PropTypes.string,
};

UserAccountPage.defaultProps = {
	updateUserData: () => {},
	user: null,
	message: '',
};

export default UserAccountPage;
