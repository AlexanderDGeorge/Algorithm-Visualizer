import React, { useState, useEffect } from 'react';

export default function SortOptions(props) {

    const { length, setLength, delay, setDelay, setArray, run } = props;

    // const [length, setLength] = useState(10);
    // const [delay, setDelay] = useState(1.00);
    // const [array, setArray] = useState([]);

    useEffect(() => {
        generateArray();
    }, [])

    function generateArray() {
        let arr = [];
        for (let i = 0; i < length; i++) {
            const value = Math.floor(Math.random() * 100);
            arr.push(value);
        }
        setArray(arr);
    }

    function handleRun() {
        
    }

    return (
        <form className='sort-controls'>
            <div className='sort-control'>
                <p>Array Size:</p>
                <button onClick={() => setLength(length - 1)}>-</button>
                <p>{length}</p>
                <button onClick={() => setLength(length + 1)}>+</button>
            </div>
            <div className='sort-control'>
                <p>Speed:</p>
                <button onClick={() => setDelay(delay - 0.25)}>-</button>
                <p>{delay.toFixed(2)}</p>
                <button onClick={() => setDelay(delay + 0.25)}>+</button>
            </div>
            <button onClick={() => generateArray()}>
                Generate Array
            </button>
            <button onClick={run}>
                Run
            </button>
        </form>
    )
}