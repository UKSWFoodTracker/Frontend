import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputField = ({
    name,
    placeholder,
    value,
    error,
    type,
    onChange,
    info
}) => {
    return (
        <div className="form-group">
            <input
              name={name}
              type={type}
              className={ classnames('form-control form-control-lg', {
                'is-invalid': error
              })}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    info: PropTypes.string
};

InputField.defaultProps = {
    type: 'text'
};

export default InputField;