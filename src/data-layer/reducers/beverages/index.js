import actions from '../../actions';
import {DELETE_BEVERAGE, DELETE_BEVERAGE_FAILED, DELETE_BEVERAGE_SUCCEDED} from "../../actions/beverages.actions";

const { beverageActions } = actions;

const beverageScheme = [
	{
		name: 'type',
		value: '',
		label: 'Type',
	},
	{
		name: 'imgSrc',
		value: '',
		label: 'Image Source',
	},
	{
		name: 'name',
		value: '',
		label: 'Name',
	},
	{
		name: 'description',
		value: '',
		label: 'Description',
	},
	{
		name: 'category',
		value: '',
		label: 'Category',
	},
	{
		name: 'quantity',
		value: '',
		label: 'Quantity',
	},
	{
		name: 'price',
		value: '',
		label: 'Price',
	},
	{
		name: 'currency',
		value: '',
		label: 'Currency',
	},
];

const initialState = {
	items: [],
	newItem: [...beverageScheme],
	isFetching: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case beverageActions.FETCH_BEVERAGES:
	case beverageActions.DELETE_BEVERAGE:
		return {
			...state,
			isFetching: true,
		};
	case beverageActions.FETCH_BEVERAGES_FAILED:
	case beverageActions.DELETE_BEVERAGE_FAILED:
		return {
			...state,
			isFetching: false,
			error: action.error,
		};
	case beverageActions.FETCH_BEVERAGES_SUCCEDED:
	case beverageActions.DELETE_BEVERAGE_SUCCEDED:
		return {
			...state,
			isFetching: false,
			items: [...action.response.beverages],
		};
	default:
		return state;
	}
};
