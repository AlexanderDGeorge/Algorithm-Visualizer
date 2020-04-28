import React, { useEffect } from 'react';

export default function SortOptions(props) {

    const { length, setLength, delay, setDelay, setArray, run } = props;

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

    return (
        <form className='sort-options'>
            <div className='sort-option'>
                <p>Array Size:</p>
                <button onClick={() => setLength(length - 1)}>-</button>
                <p>{length}</p>
                <button onClick={() => setLength(length + 1)}>+</button>
            </div>
            <button onClick={() => generateArray()}>
                Generate Array
            </button>
            <div className='sort-option'>
                <p>Speed:</p>
                <button onClick={() => setDelay(delay - 0.25)}>-</button>
                <p>{delay.toFixed(2)}</p>
                <button onClick={() => setDelay(delay + 0.25)}>+</button>
            </div>
            <button onClick={run}>
                Run
            </button>
        </form>
    )
}