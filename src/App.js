import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Sort from './components/sort/sort';

export default function App() {
    return (
        <div id='app'>
            <HashRouter>
                <Switch>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/' component={Home} />
                </Switch>
            </HashRouter>
        </div>
    )
}