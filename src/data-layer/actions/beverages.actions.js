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

export const ADD_NEW_BEVERAGE = 'ADD_NEW_BEVERAGE';
export const ADD_NEW_BEVERAGE_SUCCEDED = 'ADD_NEW_BEVERAGE_SUCCEDED';
export const ADD_NEW_BEVERAGE_FAILED = 'ADD_NEW_BEVERAGE_FAILED';

export const addNewBeverage = makeActionCreator(ADD_NEW_BEVERAGE, 'query');
export const addNewBeverageSucceeded = makeActionCreator(ADD_NEW_BEVERAGE_SUCCEDED, 'response');
export const addNewBeverageFailed = makeActionCreator(ADD_NEW_BEVERAGE_FAILED, 'error');

export const UPDATE_BEVERAGE = 'UPDATE_BEVERAGE';
export const UPDATE_BEVERAGE_SUCCEDED = 'UPDATE_BEVERAGE_SUCCEDED';
export const UPDATE_BEVERAGE_FAILED = 'UPDATE_BEVERAGE_FAILED';

export const updateBeverage = makeActionCreator(UPDATE_BEVERAGE, 'query');
export const updateBeverageSucceeded = makeActionCreator(UPDATE_BEVERAGE_SUCCEDED, 'response');
export const updateBeverageFailed = makeActionCreator(UPDATE_BEVERAGE_FAILED, 'error');

export const FETCH_BEVERAGE_BY_ID = 'FETCH_BEVERAGE_BY_ID';
export const FETCH_BEVERAGE_BY_ID_SUCCEDED = 'FETCH_BEVERAGE_BY_ID_SUCCEDED';
export const FETCH_BEVERAGE_BY_ID_FAILED = 'FETCH_BEVERAGE_BY_ID_FAILED';

export const fetchBeverageById = makeActionCreator(FETCH_BEVERAGE_BY_ID, 'query');
export const fetchBeverageByIdSucceeded = makeActionCreator(FETCH_BEVERAGE_BY_ID_SUCCEDED, 'response');
export const fetchBeverageByIdFailed = makeActionCreator(FETCH_BEVERAGE_BY_ID_FAILED, 'error');
