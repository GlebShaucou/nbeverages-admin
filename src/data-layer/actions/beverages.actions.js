import makeActionCreator from './makeActionCreator';

export const FETCH_BEVERAGES = 'FETCH_BEVERAGES';
export const FETCH_BEVERAGES_SUCCEDED = 'FETCH_BEVERAGES_SUCCEDED';
export const FETCH_BEVERAGES_FAILED = 'FETCH_BEVERAGES_FAILED';

export const fetchBeverages = makeActionCreator(FETCH_BEVERAGES, 'query');
export const fetchBeveragesSucceded = makeActionCreator(FETCH_BEVERAGES_SUCCEDED, 'response');
export const fetchBeveragesFailed = makeActionCreator(FETCH_BEVERAGES_FAILED, 'error');

export const DELETE_BEVERAGE = 'DELETE_BEVERAGE';
export const DELETE_BEVERAGE_SUCCEDED = 'DELETE_BEVERAGE_SUCCEDED';
export const DELETE_BEVERAGE_FAILED = 'DELETE_BEVERAGE_FAILED';

export const deleteBeverage = makeActionCreator(DELETE_BEVERAGE, 'query');
export const deleteBeverageSucceded = makeActionCreator(DELETE_BEVERAGE_SUCCEDED, 'response');
export const deleteBeverageFailed = makeActionCreator(DELETE_BEVERAGE_FAILED, 'error');
