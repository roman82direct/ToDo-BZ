import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import ourStore from '@core/store';
import Router from "@core/Router";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "@root/theme";
import GlobalStyles from "@root/GlobalStyles";

const container = document.querySelector('#main');

ReactDom.render(
    <Provider store={ ourStore() }>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                <Router />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    container
);
