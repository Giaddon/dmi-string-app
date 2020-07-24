/**
 * NewStringPage
 * Renders a form for submitting a new string to the server.
 * @prop {string} newString The content of the form input.
 * @prop {function} onChangeInput Manages form input state.
 * @prop {function} onSubmitForm Fires when form is submitted.
 * @prop {object} alert Contains display status and message for alert component.
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import NewStringForm from 'components/NewStringForm';
import Alert from 'components/Alert';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { changeString, addString } from './actions';
import { makeSelectNewString, makeSelectAlert } from './selectors';
import saga from './saga';
import reducer from './reducer';

const key = 'newStringPage';

export function NewStringPage({
  newString,
  onChangeInput,
  onSubmitForm,
  alert,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <h1>Add a string</h1>
      <NewStringForm
        newString={newString}
        onChangeInput={onChangeInput}
        onSubmitForm={onSubmitForm}
      />
      <Alert display={alert.display} message={alert.message} />
    </div>
  );
}

NewStringPage.propTypes = {
  newString: PropTypes.string,
  onChangeInput: PropTypes.func,
  onSubmitForm: PropTypes.func,
  alert: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  newString: makeSelectNewString(),
  alert: makeSelectAlert(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addString());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(NewStringPage);
