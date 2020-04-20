import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Sorts from './components/sorts/sorts';

export default function App() {
    return (
        <div id='app'>
            <HashRouter>
                <Switch>
                    <Route path='/sort' component={Sorts}/>
                    <Route path='/' component={Home} />
                </Switch>
            </HashRouter>
        </div>
    )
}