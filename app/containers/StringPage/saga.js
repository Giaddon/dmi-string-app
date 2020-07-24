/**
 * Gets the array of strings from the server
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import StringAPI from 'utils/StringAPI';
import { GET_STRINGS } from './constants';
import { getStringsSuccess, getStringsFailure } from './actions';

// worker Saga: will be fired on GET_STRINGS actions
export function* getStringsFromServer() {
  try {
    const strings = yield call(StringAPI.getAll);
    yield put(getStringsSuccess(strings));
  } catch (err) {
    yield put(getStringsFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getStringsSaga() {
  yield takeLatest(GET_STRINGS, getStringsFromServer);
}
