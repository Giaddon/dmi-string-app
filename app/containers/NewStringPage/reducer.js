/*
 * NewStringPageReducer
 * Reducer for data relevant to the NewStringPage.
 */

import produce from 'immer';
import {
  CHANGE_STRING,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILURE,
} from './constants';

// The initial state of the NewStringPage store
export const initialState = {
  newString: '',
  alert: { display: false, message: '' },
};

/* eslint-disable default-case, no-param-reassign */
const newStringPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING:
        draft.newString = action.newString;
        draft.alert.display = false;
        break;

      case ADD_STRING:
        draft.alert.display = false;
        break;

      case ADD_STRING_SUCCESS:
        draft.newString = '';
        draft.alert.display = true;
        draft.alert.message = `New string added: "${action.newString}"`;
        break;

      case ADD_STRING_FAILURE:
        draft.alert.display = true;
        draft.alert.message = `Error: ${action.error.message}`;
        break;
    }
  });

export default newStringPageReducer;
