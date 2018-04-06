import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import * as actions from '../../../actions/List';
import {bindActionCreators} from "redux";

class ShoppingListContainer extends React.Component {

    render(){
        return (
            <div>asdasdasd</div>
        );
    }
}

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

ShoppingListContainer.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer);
