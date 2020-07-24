/**
 * Tests for StringPage reducers
 */

import produce from 'immer';

import stringPageReducer from '../reducer';
import { getStrings, getStringsSuccess, getStringsFailure } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('stringPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      strings: false,
      loading: true,
      alert: { display: false, message: '' },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(stringPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getStrings action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.strings = false;
      draft.loading = true;
      draft.alert = { display: false, message: '' };
    });

    expect(stringPageReducer(state, getStrings())).toEqual(expectedResult);
  });

  it('should handle the getStringsSuccess action correctly', () => {
    const fixture = [
      'The future belongs to those who believe in the beauty of their dreams.',
      "In the end, it's not the years in your life that count. It's the life in your years.",
      'Life is never fair, and perhaps it is a good thing for most of us that it is not.',
      'You only live once, but if you do it right, once is enough.',
    ];
    const expectedResult = produce(state, draft => {
      draft.strings = fixture;
      draft.loading = false;
    });

    expect(stringPageReducer(state, getStringsSuccess(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getStringsFailure action correctly', () => {
    const fixture = { message: 'This is an error' };
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.strings = false;
      draft.alert = { display: true, message: `Error: ${fixture.message}` };
    });

    expect(stringPageReducer(state, getStringsFailure(fixture))).toEqual(
      expectedResult,
    );
  });
});
