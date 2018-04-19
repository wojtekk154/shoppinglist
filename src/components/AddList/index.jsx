import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import './index.css';


const AddList = ({name, handleInput, handleSubmit}) => (
    <React.Fragment>
        <form onSubmit={handleSubmit} className="add-list-form">
            <TextField
                fullWidth
                hintText="Name"
                name='name'
                value={name}
                onChange={handleInput}
                type="text"
                className="input-width"
            />
            <FloatingActionButton mini={true} color="primary" aria-label="add" type="submit">
                <i className="material-icons">add</i>
            </FloatingActionButton>
        </form>
    </React.Fragment>
);

AddList.propTypes = {
    quantity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

AddList.defaultProps = {};

export {AddList};