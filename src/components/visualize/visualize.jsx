import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './visualize.css';

export default function Visualize(props) {

    const { state } = props.location;
    const [running, setRunning] = useState(false);

    if (state) {
        return (
            <div className="visualize">
                <header className="visualize-header">
                    <button onClick={() => setRunning(!running)}>{running ? "Pause" : "Start"}</button>
                </header>
            </div>
        )
    } else {
        return <Redirect to="/"/>
    }
}