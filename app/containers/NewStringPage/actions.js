import {
  CHANGE_STRING,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILURE,
} from './constants';

/**
 * Dispatched when the user makes a change to the new string input.
 *
 * @param {string} newString The submitted string
 *
 * @return {object} An action object with a type of CHANGE_STRING and the new string.
 */

export function changeString(newString) {
  return {
    type: CHANGE_STRING,
    newString,
  };
}

/**
 * Dispatched when the user submits a new string for the server.
 *
 * @return {object} An action object with a type of ADD_STRING.
 */

export function addString() {
  return { type: ADD_STRING };
}
/**
 * Dispatched when the new string is added to ther server successfully.
 *
 * @param {string} newString The newly-added string sent from the server
 *
 * @return {object} An action object with a type of ADD_STRINGS_SUCCESS and the server response.
 */
export function addStringSuccess(newString) {
  return { type: ADD_STRING_SUCCESS, newString };
}
/**
 * Dispatched when there's an error adding a new string to the server.
 *
 * @param {object} error The error
 *
 * @return {object} An action object with a type of ADD_STRING_FAILURE and the error.
 */
export function addStringFailure(error) {
  return { type: ADD_STRING_FAILURE, error };
}
