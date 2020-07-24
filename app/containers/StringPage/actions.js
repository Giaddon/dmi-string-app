import {
  GET_STRINGS,
  GET_STRINGS_SUCCESS,
  GET_STRINGS_FAILURE,
} from './constants';

/**
 * Requests string data from the server.
 *
 * @return {object} An action object with a type of GET_STRINGS
 */
export function getStrings() {
  return { type: GET_STRINGS };
}

/**
 * Dispatched when string data recieved from the server.
 *
 * @param  {array} strings An array of strings recieved from the server.
 *
 * @return {object} An action object with a type of GET_STRINGS_SUCCESS and the string array
 */
export function getStringsSuccess(strings) {
  return { type: GET_STRINGS_SUCCESS, strings };
}

/**
 * Dispatched when there's an error retrieving string data from the server.
 *
 * @param {object} error The error
 *
 * @return {object} An action object with a type of GET_STRINGS_FAILURE and the error.
 */
export function getStringsFailure(error) {
  return { type: GET_STRINGS_FAILURE, error };
}
