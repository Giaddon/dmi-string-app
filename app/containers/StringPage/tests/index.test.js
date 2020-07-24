/**
 * Test the StringPage.
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { StringPage, mapDispatchToProps } from '../index';
import { getStrings } from '../actions';
import configureStore from '../../../configureStore';

describe('<StringPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringPage
            loading
            onPageLoad={() => {}}
            alert={{ display: false, message: '' }}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the strings on mount', () => {
    const loadSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringPage
            onPageLoad={loadSpy}
            loading
            alert={{ display: false, message: '' }}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(loadSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onPageLoad', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onPageLoad).toBeDefined();
      });

      it('should dispatch getStrings when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onPageLoad();
        expect(dispatch).toHaveBeenCalledWith(getStrings());
      });
    });
  });
});
