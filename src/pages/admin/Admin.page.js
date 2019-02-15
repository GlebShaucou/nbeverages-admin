import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EditForm } from '../../components';

export default class AdminPage extends Component {
	componentDidMount() {
		const { loadData } = this.props;

		loadData();
	}

	render() {
		const {
			items,
			newItem,
		} = this.props;

		return (
			<div className="page-component page-component--admin">
				<div className="admin-page__edit-section">
					<EditForm fields={newItem} />
				</div>
				<div className="admin-page__list-of-item">
					<ul>
						{items.map((item) => (
							<li key={item.id}>
								<span>{item.type}</span>
								<span>{item.name}</span>
								<span>{item.description}</span>
								<span>{item.category}</span>
								<span>{item.quantity}</span>
								<span>{item.price}</span>
								<span>{item.currency}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

AdminPage.propTypes = {
	items: PropTypes.array,
	newItem: PropTypes.array,
	loadData: PropTypes.func,
};

AdminPage.defaultProps = {
	items: [],
	newItem: [],
	loadData: () => {},
};
