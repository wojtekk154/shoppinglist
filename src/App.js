import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { store } from './store/store';
import MainContainer from "./containers/Main/index";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <MainContainer />
                    </BrowserRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
