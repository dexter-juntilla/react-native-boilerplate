import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { SOME_ACTION, somethingHappened } from '../actions/sampleActions';

export function* someGenerator() {
  yield delay(1000);

  yield put(somethingHappened('random guy'));
}

export default function* rootSaga() {
  yield takeEvery(SOME_ACTION, someGenerator);
}
