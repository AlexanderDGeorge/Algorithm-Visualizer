import React, { useState } from 'react';
import NavBar from '../nav/navbar';
import SortOptions from './sort-options';

export default function SelectionSort() {

    let container;
    const [length, setLength] = useState(10);
    const [delay, setDelay] = useState(5.00);
    const [array, setArray] = useState([]);

    function handleRun() {
        container = document.querySelector('.array');

    }

    function SelectionSortAnimation() {
        return (
            <div className='array'>
                {array.map((element, i) => (
                    <div className='element' key={i}>
                        <label>{element}</label>
                        <div style={{ height: element * 3, width: 30, x: i * 30 }}/>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className='sort'>
            <NavBar />
            <SortOptions 
                length={length} 
                setLength={val => setLength(val)}
                delay={delay}
                setDelay={val => setDelay(val)}
                array={array}
                setArray={val => setArray(val)}
                run={handleRun}
            />
            <SelectionSortAnimation />
        </div>
    )
}