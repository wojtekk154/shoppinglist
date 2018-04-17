import React from 'react';
import {connect} from "react-redux";

import {bindActionCreators} from "redux";
import {UserListComponentComponent, ListItemsComponent} from '../';
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
                <Route path={`${this.props.match.url}:id`} component={ListItemsComponent} />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state, local) {
    return {...state, ...local};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

ShoppingContainer.propTypes = {};
const ShoppingContainerComponent = connect(mapStateToProps, mapDispatchToProps)(ShoppingContainer);
export {ShoppingContainerComponent};
