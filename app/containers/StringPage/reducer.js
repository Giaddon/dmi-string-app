/*
 * StringPage Reducer
 * Reducer for data relevant to the StringPage.
 *
 */

import produce from 'immer';
import {
  GET_STRINGS,
  GET_STRINGS_SUCCESS,
  GET_STRINGS_FAILURE,
} from './constants';

// The initial state of the StringPage store
export const initialState = {
  strings: false,
  loading: true,
  alert: { display: false, message: '' },
};

/* eslint-disable default-case, no-param-reassign */
const stringPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_STRINGS:
        draft.loading = true;
        draft.strings = false;
        draft.alert = { display: false, message: '' };
        break;

      case GET_STRINGS_SUCCESS:
        draft.loading = false;
        draft.strings = action.strings;
        break;

      case GET_STRINGS_FAILURE:
        draft.alert.display = true;
        draft.alert.message = `Error: ${action.error.message}`;
        break;
    }
  });

export default stringPageReducer;
