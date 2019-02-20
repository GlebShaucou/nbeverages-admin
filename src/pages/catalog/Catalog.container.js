import { connect } from 'react-redux';

import CatalogPage from './Catalog.page';
import actions from '../../data-layer/actions';

const { beverageActions } = actions;

const mapStateToProps = (state) => {
	const { beverages: { items } } = state;

	return {
		items,
	};
};

const mapDispatchToProps = dispatch => ({
	loadData: () => {
		dispatch(beverageActions.fetchBeverages({ id: undefined }));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CatalogPage);
