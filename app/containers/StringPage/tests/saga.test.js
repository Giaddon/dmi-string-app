/**
 * Tests for StringPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { GET_STRINGS } from '../constants';
import { getStringsSuccess, getStringsFailure } from '../actions';

import getStringsSaga, { getStringsFromServer } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getStringsFromServer Saga', () => {
  let getStringsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getStringsGenerator = getStringsFromServer();
    const selectDescriptor = getStringsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getStringsSuccess action if it recieves the data successfully', () => {
    const response = ['TEST STRING1', 'TEST STRING2'];
    const putDescriptor = getStringsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getStringsSuccess(response)));
  });

  it('should call the getStringsFailure action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(getStringsFailure(response)));
  });
});

describe('getStrings Saga', () => {
  const getStringsSagaFunc = getStringsSaga();

  it('should start task to watch for GET_STRINGS action', () => {
    const takeLatestDescriptor = getStringsSagaFunc.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(GET_STRINGS, getStringsFromServer),
    );
  });
});
