import React from 'react';

import {Route, Switch, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

import * as actionsCreator  from '../../actions';

import {Header, MenuUrlLinks} from '../../components';
import * as constants from '../../constants';
import {ShoppingContainerComponent} from '../ShoppingList';
import {AuthContainerComponent} from "../Authentication/AuthContainer/index";

import './index.css';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            drawer: false
        };

        this.handleDrawer = this.handleDrawer.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    isLoggedIn() {
        return this.props.session.accessToken !== '';
    }

    handleDrawer() {
        this.setState(props => {
            return {drawer: !props.drawer};
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header brandName="ShoppingList" handleDrawer={this.handleDrawer}/>
                <Drawer open={this.state.drawer}>
                    <RaisedButton label="Material UI" onClick={this.handleDrawer}/>
                    <MenuUrlLinks linkList={constants.LINKS} handleDrawer={this.handleDrawer}/>
                </Drawer>
                <main className="main-container">
                    <Switch>
                        <Route exact path="/" component={ShoppingContainerComponent}/>
                        <Route path="/auth" component={AuthContainerComponent}/>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state, local) {
    return {...state, ...local};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreator, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContainer));

