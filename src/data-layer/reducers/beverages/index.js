import actions from '../../actions';

const beverageSchema = [
	{
		name: 'category',
		label: 'Категория',
	},
	{
		name: 'type',
		label: 'Тип',
	},
	{
		name: 'imgSrc',
		label: 'Ссылка на изображение',
	},
	{
		name: 'name',
		label: 'Наименование товара',
	},
	{
		name: 'description',
		label: 'Описание',
	},
	{
		name: 'availablePackaging',
		label: 'Фасовка',
	},
	{
		name: 'packingUnit',
		label: 'Единица измерения',
	},
	{
		name: 'standartPackaging',
		label: 'Стандартная упаковка',
	},
	{
		name: 'standartPackagingPrice',
		label: 'Стоимость стандартной упаковки',
	},
	{
		name: 'standartPackagingCurrency',
		label: 'Валюта',
	},
];

const { beverageActions } = actions;
const initialState = {
	items: [],
	newItem: {
		schema: [...beverageSchema],
	},
	selectedItem: null,
	filters: {},
	appliedFilters: [],
};

const getFilters = (beverages) => {
	const type = new Set();
	const category = new Set();

	beverages.forEach((beverage) => {
		type.add(beverage.type);
		category.add(beverage.category);
	});

	return {
		category: [...category],
		type: [...type],
	};
};

const updateFilters = ({ appliedFilters }, { query, addFilter }) => {
	const updatedFilters = appliedFilters
		.filter(appliedFilter => appliedFilter.filterName !== query.filterName);

	if (addFilter) {
		return [...updatedFilters, { ...query }];
	}

	return updatedFilters;
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
	case beverageActions.SET_BEVERAGES_FILTER:
		return {
			...state,
			appliedFilters: updateFilters(state, action),
		};
	default:
		return state;
	}
};
