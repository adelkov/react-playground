import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField/TextField";


const TextInput = ({name, label, onChange, onFocus, placeholder, value, error}) => {

    return (
        <div className="field">
            <TextField
                fullWidth
                label={label}
                error={Boolean(error)}
                helperText={error}
                variant="outlined"
                type="text"
                name={name}
                className="input"
                placeholder={placeholder}
                value={value}
                onFocus={onFocus}
                onChange={onChange}/>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    onFocus: PropTypes.func
};

export default TextInput;