import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as actions from '../../actions/List/index';
import {List, ListItem} from "material-ui/List";
import {AddList, NavigationLink} from '../../components/index';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const floating = {
    position: 'absolute',
    top: '4px',
    right: '5px'
};

class UserListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: '',
            name: '',
            unit: ''
        };

        this.setInputState = this.setInputState.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        this.props.getListCollectionAction();
    }

    setInputState(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    deleteList(id){
        console.log(id);
        this.props.removeListAction({id});
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addNewListAction(this.state);
    }

    render() {
        const {lists} = this.props;

        return (
            <div>
                <h2>Users Lists</h2>
                <h4>AddNewList</h4>
                <AddList
                    quantity={this.state.quantity}
                    name={this.state.name}
                    unit={this.state.unit}
                    handleInput={this.setInputState}
                    handleSubmit={this.submitForm}
                />
                <List>
                    {lists.map((value, key) => (
                        <ListItem key={`xs-${key}`}>
                            <NavigationLink path={`/${value._id}`} name={value.name}/>
                            <FloatingActionButton mini={true}   secondary={true}  className={'right'} style={floating}
                                                  aria-label="remove" type="button" onClick={this.deleteList.bind(this, value._id)}>
                                <i className="material-icons">remove</i>
                            </FloatingActionButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

function mapStateToProps(state, local) {
    return {...state, ...local};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

UserListComponent.propTypes = {};
const UserListComponentContainer = connect(mapStateToProps, mapDispatchToProps)(UserListComponent);
export {UserListComponentContainer}
