/**
 * StringPage
 *
 * On mount, requests string data from the server. If the array arrives, it is loaded and displayed.
 * If not, an error message is displayed.
 * @prop {array} strings Array of strings from the server.
 * @prop {boolean} loading if false, app has recieved data from the server.
 * @prop {object} alert Contains the display status and message of the alert component.
 * @prop {function} onPageLoad runs on mount, the function that pings the server for data.
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import StringsList from 'components/StringsList';
import Alert from 'components/Alert';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { getStrings } from './actions';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectAlert,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'stringPage';

export function StringPage({ strings, loading, alert, onPageLoad }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <div>
      <Alert display={alert.display} message={alert.message} />
      <LoadingIndicator loading={loading} />
      <StringsList loading={loading} strings={strings} />
    </div>
  );
}

StringPage.propTypes = {
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool,
  alert: PropTypes.object,
  onPageLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  alert: makeSelectAlert(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(getStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StringPage);
