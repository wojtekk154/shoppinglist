import React from 'react';


import './index.css';

export function Loader() {
    return (
        <div className="container">
            <div className="loading-icon">
                <i className="material-icons">loop</i>
            </div>
        </div>
    );
}