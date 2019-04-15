/* eslint-disable max-len */
import React from 'react';

const Input = ({
  type,
  name,
  id,
  value,
  placeholder,
  classes,
  onChange,
  autoFocus
}) => {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      className={classes}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  name: '',
  id: '',
  value: '',
  placeholder: '',
  classes: '',
  autoFocus: false
};

export default Input;
