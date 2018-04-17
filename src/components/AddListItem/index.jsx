import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import './index.css';


const AddListItem = ({quantity, name, unit, handleInput, handleSubmit}) => (
    <React.Fragment>
        <form onSubmit={handleSubmit} className="add-list-form">
            <TextField
                hintText="Name"
                name='name'
                value={name}
                onChange={handleInput}
                type="text"
            />
            <span className="input-container">
                <TextField
                    hintText="Quantity"
                    name='quantity'
                    type="number"
                    value={quantity}
                    onChange={handleInput}
                    className="input-width"
                />
            </span>
            <span className="input-container">
                <TextField
                    hintText="Unit"
                    name="unit"
                    value={unit}
                    onChange={handleInput}
                    className="input-width"
                    type="text"
                />
            </span>
            <span className="input-container">
                <FloatingActionButton mini={true} color="primary" aria-label="add" type="submit">
                    <i className="material-icons">add</i>
                </FloatingActionButton>
            </span>
        </form>
    </React.Fragment>
);

AddListItem.propTypes = {
    quantity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

AddListItem.defaultProps = {};

export {AddListItem};