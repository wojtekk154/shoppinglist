import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {MenuItem, SelectField} from "material-ui";

import firebase from 'firebase';
import ListService from '../../services/listService';

import './style.css';

const style = {width: '100%'};

class NewList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: 'szt',
            list: []
        };

        this.handleNewProduct = this.handleNewProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }


    handleNewProduct(e) {
        e.preventDefault();
        this.setState({
            list: [...this.state.list, {
                product: e.target.product.value,
                count: e.target.count.value,
                unit: this.state.unit,
                taken: false
            }]
        });
        this.setState({unit: 'szt'});
        e.target.reset();
    }

    handleChange(event, index, value) {
        this.setState({unit: value});
    }

    removeProduct(item) {
        this.setState({list: [...this.state.list.slice(0, item), ...this.state.list.slice(item + 1)]})
    }

    createList() {
     firebase.database().ref('/lists').push(this.state.list);

    }

    render() {
        return (
            <div className="list-container">
                <form onSubmit={this.handleNewProduct} className="input-section">
                    <GridList
                        cols={3}
                        cellHeight={50}
                        padding={4}
                    >
                        <GridTile
                            cols={3}
                            rows={1}
                        >
                            <TextField
                                hintText="Product"
                                style={style}
                                name="product"
                            />
                        </GridTile>
                        <GridTile
                            cols={1}
                            rows={1}
                        >
                            <TextField
                                hintText="Count"
                                name="count"
                                defaultValue={1}
                                type="number"
                            />
                        </GridTile>
                        <GridTile
                            cols={1}
                            rows={1}
                            style={style}
                        >
                            <SelectField value={this.state.unit} onChange={this.handleChange} name="unit">
                                <MenuItem value="kg" primaryText="KG"/>
                                <MenuItem value="g" primaryText="g"/>
                                <MenuItem value="szt" primaryText="szt."/>
                                <MenuItem value="l" primaryText="litr"/>
                            </SelectField>

                        </GridTile>
                        <GridTile
                            cols={1}
                            rows={1}
                        >
                            <FloatingActionButton secondary={true} mini={true} type="submit" style={{float: 'right'}} >
                                <i className="material-icons">add</i>
                            </FloatingActionButton>
                        </GridTile>
                    </GridList>
                </form>
                <div className="list">
                    <List>
                        {this.state.list.map((item, index) => (
                            <ListItem key={index}>
                                <span className="product-item">
                                    {item.product} - {item.count}{item.unit}
                                </span>
                                <button className='remove-product' onClick={() => this.removeProduct(index)}>
                                    <i className="material-icons">remove</i>
                                </button>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className="create-list">
                    <RaisedButton
                        label="Create List"
                        secondary={true}
                        fullWidth={true}
                        disabled={this.state.list.length === 0}
                    />
                </div>
            </div>
        );
    }
}

NewList.propTypes = {};

export default NewList;