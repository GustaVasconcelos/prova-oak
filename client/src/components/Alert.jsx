import React, { useEffect } from 'react';

const Alert = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`alert alert-${type}`} role="alert">
            {message}
        </div>
    );
};

export default Alert;