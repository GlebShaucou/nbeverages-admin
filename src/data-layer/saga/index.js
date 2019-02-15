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

export default function* rootSaga() {
	yield fork(watchFetchBeverages);
}
