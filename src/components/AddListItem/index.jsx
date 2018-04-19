import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import './index.css';
import {MenuItem} from "material-ui";


const AddListItem = ({quantity, name, unit, handleInput, handleUnit, handleSubmit}) => (
    <React.Fragment>
        <form onSubmit={handleSubmit} className="add-list-item-form">
            <TextField
                floatingLabelText="Name"
                hintText="Name"
                name="name"
                value={name}
                onChange={handleInput}
                fullWidth
                type="text"
            />
            <span className="input-item-container">
                <TextField
                    floatingLabelText="Quantity"
                    hintText="Quantity"
                    name="quantity"
                    type="number"
                    value={quantity}
                    onChange={handleInput}
                    className="input-width"
                />

                <SelectField
                    floatingLabelText="Unit"
                    name="unit"
                    value={unit}
                    onChange={handleUnit}
                    className="input-width-unit"
                >
                      <MenuItem value="" primaryText=""/>
                      <MenuItem value="litr" primaryText="litr"/>
                      <MenuItem value="kg" primaryText="kg"/>
                      <MenuItem value="szt" primaryText="szt."/>
                </SelectField>

                <FloatingActionButton mini={true} color="primary" aria-label="add" type="submit" className="add-button">
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
    handleUnit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

AddListItem.defaultProps = {};

export {AddListItem};