import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as actions from '../../actions/ListItems';

import './style.css';
import {AddListItem} from "../../components/AddListItem/index";

class ListItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: '',
            name: '',
            unit: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUnit = this.handleUnit.bind(this);
    }

    componentDidMount() {
        this.props.getListItemsAction(this.props.getListItemsAction(this.props.match.params));
    }
    handleUnit(event, index, value) {
        this.setState({
            unit: value
        });
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <AddListItem
                    quantity={this.state.quantity}
                    name={this.state.name}
                    unit={this.state.unit}
                    handleInput={this.handleInput}
                    handleUnit={this.handleUnit}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, local) => {
    console.log(state, local);
    return {
        ...state,
        ...local
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

const ListItemsComponent = connect(mapStateToProps, mapDispatchToProps)(ListItems);
export {ListItemsComponent}