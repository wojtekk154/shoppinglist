import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

import {Header, MenuUrlLinks} from '../../components';
import * as constants from '../../constants';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

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
                    <RaisedButton label="Material UI" onClick={this.handleDrawer} />
                    <MenuUrlLinks linkList={constants.LINKS} handleDrawer={this.handleDrawer}/>
                </Drawer>
            </React.Fragment>
        );
    }
}

//
// function mamStateToProps(state) {
//     return { };
// }
//
// function mapDispatchToProps() {
//     return dispatch => {
//         dispatch
//     }
// }
export default MainContainer;