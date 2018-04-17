import React from 'react';
import {bindActionCreators} from "redux";

import * as actions from '../../../actions/ListItems';
import {connect} from "react-redux";

import './style.css';

class ListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <React.Fragmemt>
              sdasasasaasdsa
              sadsadsa
              sa
              d
              sa
              dsa
              das
              dsa
              sa
              sa
              as
          </React.Fragmemt>
        );
    }
}

const mapStateToProps =(state, local) =>{
    return {
        ...state,
        ...local
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

const ListItemsComponent = connect(mapStateToProps, mapDispatchToProps)(ListItems);
export {ListItemsComponent};