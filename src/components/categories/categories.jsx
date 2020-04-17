import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css';

export default function Categories() {
    return (
        <div className="categories">
            <Link to="/categories/sorts">Sorts</Link>
        </div>
    )
}