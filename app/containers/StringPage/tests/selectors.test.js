/**
 * Tests for StringPage selectors
 */

import {
  selectStringPage,
  makeSelectLoading,
  makeSelectStrings,
  makeSelectAlert,
} from '../selectors';

describe('selectStringPage', () => {
  it('should select the string page state', () => {
    const stringPageState = {
      strings: false,
      loading: true,
      alert: { display: false, message: '' },
    };
    const mockedState = {
      stringPage: stringPageState,
    };
    expect(selectStringPage(mockedState)).toEqual(stringPageState);
  });
});

describe('makeSelectStrings', () => {
  const stringSelector = makeSelectStrings();
  it('should select the strings array', () => {
    const strings = ['TEST STRING1', 'TEST STRING2'];
    const mockedState = {
      stringPage: {
        strings,
      },
    };
    expect(stringSelector(mockedState)).toEqual(strings);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading boolean', () => {
    const loading = false;
    const mockedState = {
      stringPage: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectAlert', () => {
  const alertSelector = makeSelectAlert();
  it('should select the alert object', () => {
    const alert = { display: false, message: '' };
    const mockedState = {
      stringPage: {
        alert,
      },
    };
    expect(alertSelector(mockedState)).toEqual(alert);
  });
});
