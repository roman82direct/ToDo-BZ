import React, { Component } from 'react';
import MainPage from '../MainPage';
import { Switch, Route } from 'react-router-dom';


class Router extends Component {

    render() {
        return (
            <Switch className="router">
                <Route exact path='/' component={ MainPage } />
                <Route
                    exact
                    path='/List/:listId'
                    render={ (obj) =>
                        <MainPage listId={ Number(obj.match.params.listId) } /> }
                />
            </Switch>
        );
    }
}

export default Router;
