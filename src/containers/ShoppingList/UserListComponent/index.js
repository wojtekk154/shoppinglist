import React from 'react';
import {connect} from "react-redux";

import * as actions from '../../../components/Routes/List';
import {bindActionCreators} from "redux";

class UserListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
               <span>
                    ***********************
                    ****************************
                    *    ***********************
                    *********************
               </span>
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

UserListComponent.propTypes = {};
const UserListComponentComponent = connect(mapStateToProps, mapDispatchToProps)(UserListComponent);
export {UserListComponentComponent};
