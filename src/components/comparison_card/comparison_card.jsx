import React from 'react';
import './comparison_card.css';

// this functional component takes in a name
// from the name we derive the information on card

export default function ComparisonCard(props) {
    return (
        <div className="comparison-card">
            {props.name}
        </div>
    )
}