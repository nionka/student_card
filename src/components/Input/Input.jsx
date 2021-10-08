import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, label, value, name, handleChange, error }) => {
  
  const getInputClasses = () => {
    return `form-control ${error ? 'is-invalid' : ''}`;
  };
  
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          id={name}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={handleChange} 
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
   );
}

Input.defaultProps = {
  type: 'text',
  placeholder: ''
}

Input.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string
};
 
export default Input;
