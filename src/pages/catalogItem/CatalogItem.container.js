import { connect } from 'react-redux';

import CatalogItemPage from './CatalogItem.page';
import actions from '../../data-layer/actions';

const getBeverageById = (state, beverageId) => {
	const { beverages: { items } } = state;

	return items.find(({ _id }) => _id === beverageId);
};

const mapStateToProps = (state, props) => {
	const { match: { params: { beverageId } } } = props;

	return {
		selectedItem: getBeverageById(state, beverageId),
	};
};

const mapDispatchToProps = (dispatch, props) => {
	console.log('props', props);

	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogItemPage);
