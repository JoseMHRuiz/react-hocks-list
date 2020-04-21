import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = props => {
  let wrapperClass = 'form-group';
  if (props.error.length > 0) {
    wrapperClass += ' has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className='field'>
        <input
          id={props.id}
          type='text'
          name={props.name}
          onChange={props.onChange}
          className='form-control'
          value={props.value}
        />
      </div>
      {props.error && <div className='alert alert-danger'>{props.error}</div>}
    </div>
  );
};

NumberInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  error: PropTypes.string
};

NumberInput.defaultProps = {
  error: ''
};

export default NumberInput;
