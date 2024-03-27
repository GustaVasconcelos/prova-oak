import React from 'react';

const Button = ({ type, text, onClick, color }) => {
    const buttonStyle = {
        backgroundColor: color,
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 16px',
        cursor: 'pointer',
        margin: '0px 4px'
    };

    return (
        <button type={type} style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;