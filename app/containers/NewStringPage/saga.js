/**
 * Saga for sending a new string to the server
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import StringAPI from 'utils/StringAPI';
import { ADD_STRING } from './constants';
import { addStringSuccess, addStringFailure } from './actions';
import { makeSelectNewString } from './selectors';

// worker Saga: will be fired on ADD_STRING action
export function* sendStringToServer() {
  // select newString from the store
  const newString = yield select(makeSelectNewString());

  try {
    const response = yield call(StringAPI.postNew, newString);
    yield put(addStringSuccess(response));
  } catch (err) {
    yield put(addStringFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* addStringSaga() {
  yield takeLatest(ADD_STRING, sendStringToServer);
}
