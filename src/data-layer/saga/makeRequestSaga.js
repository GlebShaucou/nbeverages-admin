import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

export default function makeSimpleSaga({
	request,
	onSuccessAction,
	onFailureAction,
	handleResponse,
}, {
	watchedActionType, sagaHelperEffect = takeLatest,
}) {
	const workerSagaGenerator = function* workerSaga(action) {
		try {
			const { query } = action;
			let response = yield call(request, query);

			if (typeof handleResponse === 'function') {
				response = handleResponse(response);
			}

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
