import makeActionCreator from './makeActionCreator';

export const SET_LOCALE = 'SET_LOCALE';
export const setLocale = makeActionCreator(SET_LOCALE, 'locale');
