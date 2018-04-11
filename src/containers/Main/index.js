import React from 'react';

import {Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

import {Header, MenuUrlLinks} from '../../components';
import * as ActionsCreators from '../../actions/Auth';
import * as constants from '../../constants';
import {ShoppingContainerComponent} from '../ShoppingList';
import {SignInComponent, SignUpComponent} from "../Authentication";
import {UserListComponentComponent} from "../ShoppingList";
import {PrivateRoute, PublicRoute} from "../../components";

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
                <main>
                    <Switch>
                        <PrivateRoute
                            auth={this.props.session.accessToken !== ''}
                            exact={true}
                            path="/"
                            Component={UserListComponentComponent}
                        />
                        <div className="auth-form">
                            <PublicRoute auth={this.isLoggedIn()} path="/auth/signin" Component={SignInComponent}/>
                            <PublicRoute auth={this.isLoggedIn()} path="/auth/signup" Component={SignUpComponent}/>
                        </div>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

// export default MainContainer;