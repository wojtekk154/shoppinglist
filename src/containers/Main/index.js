import React from 'react';

import {Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

import {Header, MenuUrlLinks} from '../../components';
import * as ActionsCreators from '../../actions/Auth';
import * as constants from '../../constants';
import AuthContainer from '../Authentication/AuthContainer';
import ShoppingListContainer from '../ShoppingList/ShoppingListContainer';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            drawer: false
        };

        this.handleDrawer = this.handleDrawer.bind(this);
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
                        <Route exact path="/" component={ShoppingListContainer}/>
                        <Route path="/auth" component={AuthContainer} />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state, localProps) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

// export default MainContainer;