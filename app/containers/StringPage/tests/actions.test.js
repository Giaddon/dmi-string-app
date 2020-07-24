/**
 * Tests for StringPage actions
 */

import {
  GET_STRINGS_FAILURE,
  GET_STRINGS,
  GET_STRINGS_SUCCESS,
} from '../constants';
import { getStrings, getStringsFailure, getStringsSuccess } from '../actions';

describe('StringPage Actions', () => {
  describe('getStrings', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_STRINGS,
      };

      expect(getStrings()).toEqual(expectedResult);
    });
  });

  describe('getStringsSuccess', () => {
    it('should return the correct type and the given strings', () => {
      const fixture = ['TEST STRING1, TEST STRING2'];
      const expectedResult = {
        type: GET_STRINGS_SUCCESS,
        strings: fixture,
      };

      expect(getStringsSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('getStringsFailure', () => {
    it('should return the correct type and error message', () => {
      const fixture = { message: 'This is an error' };
      const expectedResult = {
        type: GET_STRINGS_FAILURE,
        error: fixture,
      };

      expect(getStringsFailure(fixture)).toEqual(expectedResult);
    });
  });
});
