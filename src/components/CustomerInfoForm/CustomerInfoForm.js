import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as constants from '../../constants';
import {
	Button, Input, Select, Context,
} from '../index';
import * as utils from '../../utils';

const CustomerInfoForm = (props) => {
	const [customer, setCustomer] = useState(props.customer);

	useEffect(() => {
		setCustomer(props.customer);
	}, [props.customer]);

	const {
		customerName,
		paymentMethod,
		customerEmail,
		deliveryMethod,
		deliveryAddress,
		customerPhone,
	} = customer;

	const onChangeFormValue = (e) => {
		const { target: { name, value } } = e;

		setCustomer(prevCustomer => ({
			...prevCustomer,
			[name]: value,
		}));
	};

	const onSelectFormValue = name => (value) => {
		setCustomer(prevCustomer => ({
			...prevCustomer,
			[name]: name === 'deliveryAddress'
				? typeof value === 'string' ? value : value.label
				: value,
		}));
	};

	return (
		<Context.Consumer>
			{({ intl: { getTranslation } }) => (
				<form
					action=""
					className="customer-info-form"
					onSubmit={(e) => { e.preventDefault(); }}
				>
					<fieldset className="customer-info__fieldset">
						<legend className="customer-info__legend">
							<FormattedMessage id={constants.SHOPPING_CART_CUSTOMER_FORM_NAME} />
						</legend>
						<Input
							label={(
								<FormattedMessage id={constants.SHOPPING_CART_CUSTOMER_NAME} />
							)}
							name="customerName"
							onChange={onChangeFormValue}
							value={customerName}
						/>
						<Select
							label={(
								<FormattedMessage id={constants.SHOPPING_CART_PAYMENT_METHOD} />
							)}
							name="paymentMethod"
							onChange={onSelectFormValue('paymentMethod')}
							selectedValue={paymentMethod || { value: '' }}
							options={utils.getPaymentMethods(getTranslation)}
						/>
						<Input
							type="tel"
							label={(
								<FormattedMessage id={constants.SHOPPING_CART_PHONE_NUMBER} />
							)}
							name="customerPhone"
							onChange={onChangeFormValue}
							value={customerPhone}
							placeholder="+375 XX YYY YY YY"
						/>
						<Input
							type="email"
							label={(
								<FormattedMessage id={constants.SHOPPING_CART_EMAIL} />
							)}
							name="customerEmail"
							onChange={onChangeFormValue}
							value={customerEmail || ''}
						/>
						<Select
							label={(
								<FormattedMessage id={constants.SHOPPING_CART_DELIVERY_METHOD} />
							)}
							name="deliveryMethod"
							onChange={onSelectFormValue('deliveryMethod')}
							selectedValue={deliveryMethod || { value: '' }}
							options={utils.getDeliveryMethods(getTranslation)}
						/>
						{deliveryMethod && deliveryMethod.value === 'pickup' && (
							<Select
								label={(
									<FormattedMessage id={constants.SHOPPING_CART_SELECT_PICKUP_POINT} />
								)}
								name="deliveryAddress"
								onChange={onSelectFormValue('deliveryAddress')}
								selectedValue={{
									label: deliveryAddress,
									value: deliveryAddress,
								}}
								options={utils.getPickupAddresses(getTranslation).map(val => ({
									label: val,
									value: val,
								}))}
							/>
						)}
						{deliveryMethod && deliveryMethod.value === 'delivery' && (
							<Input
								label={(
									<FormattedMessage id={constants.SHOPPING_CART_ENTER_DELIVERY_ADDRESS} />
								)}
								name="deliveryAddress"
								onChange={onChangeFormValue}
								value={deliveryAddress}
								placeholder={
									getTranslation({ id: constants.SHOPPING_CART_DELIVERY_ADDRESS_PLACEHOLDER })
								}
							/>
						)}
						<div className="customer-info__buttons">
							{props.buttons.map((button, index) => (
								<Button
									key={index}
									className={`customer-info__button ${button.className || ''}`}
									caption={button.caption}
									onClick={() => { button.onClick(customer); }}
								/>
							))}
						</div>
					</fieldset>
				</form>
			)}
		</Context.Consumer>
	);
};

CustomerInfoForm.propTypes = {
	customer: PropTypes.object,
	buttons: PropTypes.array,
};

CustomerInfoForm.defaultProps = {
	customer: {
		customerName: '',
		paymentMethod: '',
		customerEmail: '',
		deliveryMethod: '',
		deliveryAddress: '',
		customerPhone: '',
	},
	buttons: [{
		caption: 'Submit',
		onClick: () => {},
		className: '',
	}],
};

export default CustomerInfoForm;
