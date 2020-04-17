import React from 'react';
import { Route } from 'react-router-dom';
import Categories from './categories';
import Sorts from '../sorts/sorts';

export default function CategoryRouter() {
    return (
        <div className="category-router">
            <Route path="/categories/sorts" component={Sorts}/>
            <Route exact path="/categories" component={Categories}/>
        </div>
    )
}