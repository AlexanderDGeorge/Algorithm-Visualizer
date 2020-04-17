import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <header className="nav">
            <Link to="/search">Search</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/" style={{fontSize: "20px"}}>JavaScript Visualizer</Link>
            <Link to="/requests">Requests</Link>
            <Link to="/help">Help</Link>
        </header>
    )
}