import React from 'react';
import propTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <div>
    <p style={{ color: 'red' }}>{message}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: propTypes.string.isRequired,
};

export default ErrorMessage;
