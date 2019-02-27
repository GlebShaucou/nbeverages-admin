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
	selectedItem: null,
	filters: [],
};

const getFilters = (beverages) => {
	const type = new Set();
	const category = new Set();

	beverages.forEach((beverage) => {
		type.add(beverage.type);
		category.add(beverage.category);
	});

	return {
		type: [...type],
		category: [...category],
	};
};

export default (state = initialState, action) => {
	let response;
	let beverages;

	switch (action.type) {
	case beverageActions.FETCH_BEVERAGES_SUCCEDED:
	case beverageActions.DELETE_BEVERAGE_SUCCEDED:
	case beverageActions.ADD_NEW_BEVERAGE_SUCCEDED:
	case beverageActions.UPDATE_BEVERAGE_SUCCEDED:
		({ response } = action);
		({ beverages } = response);
		return {
			...state,
			items: [...beverages],
			filters: getFilters(beverages),
		};
	case beverageActions.FETCH_BEVERAGE_BY_ID_SUCCEDED:
		({ response } = action);
		return {
			...state,
			selectedItem: { ...response.beverage },
		};
	default:
		return state;
	}
};
