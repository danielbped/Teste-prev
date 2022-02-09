import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, onChange, placeholder, type, label }) => {
  return (
    <label>
      { label }
      <input
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        type={ type }
      />
    </label>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Input;
