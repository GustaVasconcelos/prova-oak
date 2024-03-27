import React from 'react';

const Input = ({ id, label, type, name, value, onChange, required }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} name={name} value={value} onChange={onChange} required={required} />
        </div>
    );
};

export default Input;
