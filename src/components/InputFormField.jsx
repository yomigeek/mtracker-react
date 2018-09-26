import React from 'react';
import { PropTypes } from 'prop-types';


const InputFormField = ({
  type, placeholder, id, onChangeMethod,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    id={id}
    onChange={onChangeMethod}
    required
  />
);

InputFormField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeMethod: PropTypes.func.isRequired,
};


export default InputFormField;
