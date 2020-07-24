/**
 * Alert box component
 * @prop {boolean} display Contents rendered when true.
 * @prop {string} message The text to display in the alert.
 */

import React from 'react';
import PropTypes from 'prop-types';
import AlertDiv from './Div';

export default function Alert({ display, message }) {
  if (display) {
    return (
      <AlertDiv>
        <p>{message}</p>
      </AlertDiv>
    );
  }

  return null;
}

Alert.propTypes = {
  display: PropTypes.bool,
  message: PropTypes.string,
};
