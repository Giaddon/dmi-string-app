/**
 * The NewStringPage state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNewStringPage = state => state.newStringPage || initialState;

const makeSelectNewString = () =>
  createSelector(
    selectNewStringPage,
    newStringPageState => newStringPageState.newString,
  );

const makeSelectAlert = () =>
  createSelector(
    selectNewStringPage,
    newStringPageState => newStringPageState.alert,
  );

export { makeSelectNewString, makeSelectAlert };
