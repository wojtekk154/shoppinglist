import React from 'react';
import {connect} from "react-redux";

import * as actions from '../../../components/Routes/List';
import {bindActionCreators} from "redux";
import {PrivateRoute} from '../../../components/Routes';
import {UserListComponentComponent} from '../UserListComponent';

class ShoppingContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
wqdwqdwq
            </React.Fragment>
        );
    }
}

function mapStateToProps(state, local) {
    return {...state, ...local};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

ShoppingContainer.propTypes = {};
const ShoppingContainerComponent = connect(mapStateToProps, mapDispatchToProps)(ShoppingContainer);
export {ShoppingContainerComponent};
