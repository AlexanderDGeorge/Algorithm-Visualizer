import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Help from './components/help/help';
import Sort from './components/sorts/sort';

export default function App() {
    return (
        <div id='app'>
            <HashRouter>
                <Switch>
                    <Route path='/sorts' component={Sort} />
                    <Route path='/help' component={Help} />
                    <Route path='/' component={Home} />
                </Switch>
            </HashRouter>
        </div>
    )
}