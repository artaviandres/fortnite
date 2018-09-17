import React from 'react';
import './Select.css';

const renderOptions = (options) => {
  return options.map((item) => <option value={item}>{item}</option>);
}

const Select = (props) => (
  <select>
    <option value="" disabled selected>{props.placeholder}</option>
    {renderOptions(props.options)}
  </select>
);

export default Select;