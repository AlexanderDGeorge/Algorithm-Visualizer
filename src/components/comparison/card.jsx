import React, { useState } from 'react';
import './comparison.css';

// this functional component takes in a name
// from the name we derive the information on card

export default function Card(props) {

    const { name, info, handleClick } = props;
    const [selected, setSelected] = useState(false);

    return (
        <div className={selected ? "card selected" : "card"} onClick={() => { handleClick(name); setSelected(!selected)}}>
            <header className="card-name">
                {name}
            </header>
            <section className="card-deets">
                <div className="card-attributes">
                    <p>best-case:</p>
                    <p>avg-case:</p>
                    <p>worst-case:</p>
                    <p>space:</p>
                </div>
                <div className="card-values">
                    <p>{info.best}</p>
                    <p>{info.avg}</p>
                    <p>{info.worst}</p>
                    <p>{info.space}</p>
                </div>
            </section>
        </div>
    )
}