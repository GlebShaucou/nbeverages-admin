import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

export default function makeSimpleSaga({
	request, onSuccessAction, onFailureAction,
}, {
	watchedActionType, sagaHelperEffect = takeLatest,
}) {
	const workerSagaGenerator = function* workerSaga(action) {
		try {
			const { query } = action;
			const response = yield call(request, query);

			yield put(onSuccessAction(response, query));
		} catch (error) {
			yield put(onFailureAction(error));
		}
	};

	const watcherSagaGenerator = function* watcherSaga() {
		yield sagaHelperEffect(watchedActionType, workerSagaGenerator);
	};

	return { workerSagaGenerator, watcherSagaGenerator };
}
