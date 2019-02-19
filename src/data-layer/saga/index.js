import {
	fork,
} from 'redux-saga/effects';

import makeRequestSaga from './makeRequestSaga';
import * as requests from '../requests';
import actions from '../actions';

const { beverageActions } = actions;

const {
	watcherSagaGenerator: watchFetchBeverages,
} = makeRequestSaga({
	request: requests.getBeverages,
	onSuccessAction: beverageActions.fetchBeveragesSucceded,
	onFailureAction: beverageActions.fetchBeveragesFailed,
}, {
	watchedActionType: beverageActions.FETCH_BEVERAGES,
});

const {
	watcherSagaGenerator: watchDeleteBeverages,
} = makeRequestSaga({
	request: requests.deleteBeverages,
	onSuccessAction: beverageActions.deleteBeverageSucceded,
	onFailureAction: beverageActions.deleteBeverageFailed,
}, {
	watchedActionType: beverageActions.DELETE_BEVERAGE,
});

const {
	watcherSagaGenerator: watchAddBeverage,
} = makeRequestSaga({
	request: requests.createBeverage,
	onSuccessAction: beverageActions.addNewBeverageSucceeded,
	onFailureAction: beverageActions.addNewBeverageFailed,
}, {
	watchedActionType: beverageActions.ADD_NEW_BEVERAGE,
});

export default function* rootSaga() {
	yield fork(watchFetchBeverages);
	yield fork(watchDeleteBeverages);
	yield fork(watchAddBeverage);
}
