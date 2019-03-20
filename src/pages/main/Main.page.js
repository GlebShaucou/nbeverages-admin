import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import * as constants from '../../constants';

import mainImgSrc from './img/main-tea.jpg';
import promoLeftSrc from './img/promo-left.jpg';
import promoRightSrc from './img/promo-right.jpg';

const MainPage = () => {
	useEffect(() => {
		document.title = 'Place, where you can find you are searching for | Tea City';
	}, []);

	const LinkWrapper = ({ children, linkTo }) => (
		<div className="link-block-container">
			<Link to={linkTo} className="link-block__link">
				{children}
			</Link>
		</div>
	);

	return (
		<div className="page-component page-component--main">
			<div className="welcome-message-section">
				<img src={mainImgSrc} alt="tea" className="welcome-message__image" />
				<LinkWrapper linkTo="/catalog">
					<span className="welcome-message__link-header">
						<FormattedMessage id={constants.MAIN_WELCOME_HEADER} />
					</span>
					<span className="welcome-message__link-text">
						<FormattedMessage id={constants.MAIN_WELCOME_MESSAGE} />
					</span>
				</LinkWrapper>
			</div>
			<div className="description-section">
				<h2 className="description__header">
					<FormattedMessage id={constants.MAIN_WELCOME_HEADER} />
				</h2>
				<div className="description__text">
					<FormattedMessage id={constants.MAIN_TEA_DESCRIPTION} />
				</div>
			</div>
			<div className="promo-section">
				<div className="promo__left-section">
					<img src={promoLeftSrc} alt="tea" className="left-section__image" />
					<LinkWrapper linkTo="/order">
						<span className="left-section__text">
							<FormattedMessage id={constants.MAIN_ORDER_STATUS} />
						</span>
					</LinkWrapper>
				</div>
				<div className="promo__right-section">
					<div className="right-section__image-wrapper">
						<img src={promoRightSrc} alt="tea" className="right-section__image" />
						<LinkWrapper linkTo="/contact">
							<span className="right-section__text">
								<FormattedMessage id={constants.MAIN_VISIT} />
							</span>
						</LinkWrapper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
