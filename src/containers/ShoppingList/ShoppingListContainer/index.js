import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import * as actions from '../../../actions/List';
import {bindActionCreators} from "redux";
import {withRouter} from 'react-router-dom';

class ShoppingListContainer extends React.Component {

    render(){
        return (
            <div>asdasdasd</div>
        );
    }
}

function mapStateToProps(state, local) {
    return {...state, ...local};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

ShoppingListContainer.propTypes = {

};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer));
