import React, { Component } from 'react';

import mainImgSrc from './img/main-tea.jpg';
import promoLeftSrc from './img/promo-left.jpg';
import promoRightSrc from './img/promo-right.jpg';

export default class MainPage extends Component {
	render() {
		return (
			<div className="page-component page-component--main">
				<div className="welcome-message-section">
					<img src={mainImgSrc} alt="tea" className="welcome-message__image" />
				</div>
				<div className="promo-section">
					<div className="promo__left-section">
						<img src={promoLeftSrc} alt="tea" className="left-section__image" />
					</div>
					<div className="promo__right-section">
						<img src={promoRightSrc} alt="tea" className="right-section__image" />
					</div>
				</div>
			</div>
		);
	}
}
