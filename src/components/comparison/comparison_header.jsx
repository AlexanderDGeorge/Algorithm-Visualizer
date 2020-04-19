import React from 'react';
import { Link } from 'react-router-dom';

export default function ComparisonHeader(props) {

    const { selected } = props;

    if (selected.length) {
        return (
            <header className="comparison-header">
                <Link to={{ pathname: "/visualize", state: { selected }}} className="visualize-button">Visualize!</Link>
            </header>
        )
    } else {
        return null;
    }
}