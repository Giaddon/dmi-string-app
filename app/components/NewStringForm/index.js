/**
 * Form for inputting a new string to send to the server.
 * @prop {string} newString The contents of the form input
 * @prop {function} onChangeInput Function that fires when change is made to the input.
 * @prop {function} onSubmitForm Function that fires when form is submitted.
 */

import React from 'react';
import PropTypes from 'prop-types';

import NewStringInput from './Input';

export default function NewStringForm({
  newString,
  onChangeInput,
  onSubmitForm,
}) {
  return (
    <form autoComplete="off">
      <NewStringInput
        onChange={onChangeInput}
        type="text"
        name="newstring"
        value={newString}
      />
      <button onClick={onSubmitForm} type="submit">
        Add
      </button>
    </form>
  );
}

NewStringForm.propTypes = {
  newString: PropTypes.string,
  onChangeInput: PropTypes.func,
  onSubmitForm: PropTypes.func,
};
