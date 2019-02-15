import makeActionCreator from './makeActionCreator';

export const FETCH_BEVERAGES = 'FETCH_BEVERAGES';
export const FETCH_BEVERAGES_SUCCEDED = 'FETCH_BEVERAGES_SUCCEDED';
export const FETCH_BEVERAGES_FAILED = 'FETCH_BEVERAGES_FAILED';

export const fetchBeverages = makeActionCreator(FETCH_BEVERAGES, 'query');
export const fetchBeveragesSucceded = makeActionCreator(FETCH_BEVERAGES_SUCCEDED, 'response');
export const fetchBeveragesFailed = makeActionCreator(FETCH_BEVERAGES_FAILED, 'error');
