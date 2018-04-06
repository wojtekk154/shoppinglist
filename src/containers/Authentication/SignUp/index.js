import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import * as actions from '../../../actions/Auth';

class SignUp extends React.Component {

    render() {
        return (
            <div>sssssssssssssssssssssssssssssssssssss</div>
        );
    }
}

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

SignUp.propTypes = {};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
