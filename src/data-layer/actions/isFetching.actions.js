import makeActionCreator from './makeActionCreator';

export const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';
export const setFetchingStatus = makeActionCreator(SET_FETCHING_STATUS, 'isFetching');
