import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Home extends React.Component {

    render(){
        return (
            <div>Dupa</div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return dispatch => {
        dispatch
    }
}

Home.propTypes = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Home);