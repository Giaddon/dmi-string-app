/**
 * A div to present the list of strings recieved from the server.
 * @prop {boolean} loading if true, app has not recieved strings from server.
 * @prop {array} strings array of strings from server.
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledString from 'components/StyledString';
import { uuid } from 'uuidv4';

export default function StringsList({ loading, strings }) {
  if (!loading && strings) {
    return (
      <div>
        <h1>Strings</h1>
        {strings.map((string, idx) => (
          <StyledString idx={idx} key={uuid()}>
            {string}
          </StyledString>
        ))}
      </div>
    );
  }
  return null;
}

StringsList.propTypes = {
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool,
};
