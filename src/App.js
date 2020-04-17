import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import Search from './components/search/search';
import CategoriesRouter from './components/categories/category_router';
import Requests from './components/requests/requests';
import Help from './components/help/help';

import './App.css';

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Nav />
            <Switch>
                <Route path="/search" component={Search}/>
                <Route path="/categories" component={CategoriesRouter}/>
                <Route path="/requests" component={Requests}/>
                <Route path="/help" component={Help}/>
                <Route path="/" component={Home}/>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
