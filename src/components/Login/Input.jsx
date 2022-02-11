import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, Label } from '../../Style/Login';

const Input = ({ name, onChange, placeholder, type, label, dataTestId }) => {
  return (
    <Label data-testid={`${ dataTestId }-label`}>
      { label }
      <StyledInput
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        type={ type }
        data-testid={`${ dataTestId }`}
      />
    </Label>
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
