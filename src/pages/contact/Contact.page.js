import React, { Component } from 'react';

export default class ContactPage extends Component {
	componentDidMount() {
		document.title = 'Contacts | Natural Beverages';
	}

	render() {
		return (
			<div className="page-component page-component--contact">
				Contact
			</div>
		);
	}
}
