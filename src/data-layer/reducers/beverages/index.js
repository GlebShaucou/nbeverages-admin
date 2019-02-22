import actions from '../../actions';

const beverageSchema = [
	{
		name: 'type',
		label: 'Type',
	},
	{
		name: 'imgSrc',
		label: 'Image Source',
	},
	{
		name: 'name',
		label: 'Name',
	},
	{
		name: 'description',
		label: 'Description',
	},
	{
		name: 'category',
		label: 'Category',
	},
	{
		name: 'quantity',
		label: 'Quantity',
	},
	{
		name: 'price',
		label: 'Price',
	},
	{
		name: 'currency',
		label: 'Currency',
	},
];

const { beverageActions } = actions;
const initialState = {
	items: [],
	newItem: {
		schema: [...beverageSchema],
	},
};

export default (state = initialState, action) => {
	let response;

	switch (action.type) {
	case beverageActions.FETCH_BEVERAGES_SUCCEDED:
	case beverageActions.DELETE_BEVERAGE_SUCCEDED:
	case beverageActions.ADD_NEW_BEVERAGE_SUCCEDED:
	case beverageActions.UPDATE_BEVERAGE_SUCCEDED:
		({ response } = action);
		return {
			...state,
			items: [...response.beverages],
		};
	default:
		return state;
	}
};
