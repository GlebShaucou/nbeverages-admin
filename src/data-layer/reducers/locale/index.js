import actions from '../../actions';

const { localeActions } = actions;
const locale = {
	selectedLocale: 'ru',
	locales: ['en', 'ru'],
};

export default (state = locale, action) => {
	switch (action.type) {
	case localeActions.SET_LOCALE:
		return {
			...state,
			selectedLocale: action.locale,
		};
	default:
		return state;
	}
};
