import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';

import { EditForm, Button } from '../../components';

export default class AdminPage extends Component {
	componentDidMount() {
		const { loadData } = this.props;

		loadData();
	}

	render() {
		const {
			items,
			newItem,
			removeItem,
		} = this.props;

		return (
			<div className="page-component page-component--admin">
				<div className="admin-page__edit-section">
					<EditForm fields={newItem} />
				</div>
				<div className="admin-page__list-of-item">
					<ul>
						{items.map(item => (
							<li key={item._id}>
								<span>{item.type}</span>
								<span>{item.name}</span>
								<span>{item.description}</span>
								<span>{item.category}</span>
								<span>{item.quantity}</span>
								<span>{item.price}</span>
								<span>{item.currency}</span>
								<Button
									caption="Delete"
									onClick={() => { removeItem(item._id); }}
								/>
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
	removeItem: PropTypes.func,
	updateIsNeeded: PropTypes.bool,
};

AdminPage.defaultProps = {
	items: [],
	newItem: [],
	loadData: () => {},
	removeItem: () => {},
	updateIsNeeded: false,
};
