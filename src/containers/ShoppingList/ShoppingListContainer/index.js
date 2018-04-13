import React from 'react';
import {connect} from "react-redux";

import * as actions from '../../../components/Routes/List';
import {bindActionCreators} from "redux";
import {UserListComponentComponent} from '../UserListComponent';
import {Redirect, Route} from "react-router-dom";

class ShoppingContainer extends React.Component {
    constructor(props) {
        super(props);

        this.isLoggedOut = this.isLoggedOut.bind(this);
    }

    isLoggedOut() {
        return this.props.session.accessToken === '';
    }

    render() {
        if(this.isLoggedOut()) {
            return (
                <React.Fragment>
                    <Redirect to="/auth/signin" />
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <Route path={`${this.props.match.url}`} component={UserListComponentComponent} />
                <Route path={`${this.props.match.url}user-list`} component={UserListComponentComponent} />
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
