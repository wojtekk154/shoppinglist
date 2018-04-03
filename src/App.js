import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainContainer from "./containers/Main/index";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <MainContainer/>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
