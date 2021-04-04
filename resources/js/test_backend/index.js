import React from 'react';
import ReactDom from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import ourStore from './core/store';
import Router from "./core/Router";
import { BrowserRouter } from "react-router-dom";

const container = document.querySelector('#main');

ReactDom.render(
    <Provider store={ ourStore() }>
        <BrowserRouter>
            <StylesProvider>
                <Router />
            </StylesProvider>
        </BrowserRouter>
    </Provider>,
    container
);
