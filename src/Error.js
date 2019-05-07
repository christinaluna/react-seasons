import './Error.css';
import React from 'react';

const Error = props => {
    return (
        <div className="error-message">
            <i className={`massive exclamation icon`} />
            <h1>{props.errorMessage}</h1>
        </div>
    );
};

ErrorEvent.defaultProps = {
    loadingMessage: 'Sorry, something went wrong'    
};

export default Error;