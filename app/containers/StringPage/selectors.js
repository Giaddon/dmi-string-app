/**
 * The StringPage state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStringPage = state => state.stringPage || initialState;

const makeSelectStrings = () =>
  createSelector(
    selectStringPage,
    stringPageState => stringPageState.strings,
  );

const makeSelectLoading = () =>
  createSelector(
    selectStringPage,
    stringPageState => stringPageState.loading,
  );

const makeSelectAlert = () =>
  createSelector(
    selectStringPage,
    stringPageState => stringPageState.alert,
  );

export {
  selectStringPage,
  makeSelectLoading,
  makeSelectStrings,
  makeSelectAlert,
};
