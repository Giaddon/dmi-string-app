/**
 * Loading indicator.
 * @prop {boolean} loading Component only renders when true.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled div for loading indicator.
const LoadingDiv = styled.div`
  max-width: 300px;
  margin: 20px auto;
  padding: 0.2rem;
  background-color: skyblue;
  border-radius: 4px;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
`;

export default function LoadingIndicator({ loading }) {
  if (loading) {
    return (
      <LoadingDiv>
        <h2>Loading...</h2>
      </LoadingDiv>
    );
  }

  return null;
}

LoadingIndicator.propTypes = {
  loading: PropTypes.bool,
};
