import React, { useState } from 'react';
import Card from '../comparison/card';
import ComparisonHeader from '../comparison/comparison_header';
import './sorts.css'

const sorts = {
    'bubble sort': { 'best': 'n', 'avg': 'n^2', 'worst': 'n^2', 'space': '1' },
    'selection sort': { 'best': 'n^2', 'avg': 'n^2', 'worst': 'n^2', 'space': '1' },
    'insertion sort': { 'best': 'n', 'avg': 'n^2', 'worst': 'n^2', 'space': '1' },
    'merge sort': { 'best': 'nlogn', 'avg': 'nlogn', 'worst': 'nlogn', 'space': 'n' },
    'quick sort': { 'best': 'nlogn', 'avg': 'nlogn', 'worst': 'n^2', 'space': 'nlogn' },
    'heap sort': { 'best': 'nlogn', 'avg': 'nlogn', 'worst': 'nlogn', 'space': '1' },
    'counting sort': { 'best': 'n+k', 'avg': 'n+k', 'worst': 'n+k', 'space': 'k' },
    'radix sort': { 'best': 'n*k', 'avg': 'n*k', 'worst': 'n*k', 'space': 'n+k' },
}

export default function Sorts() {
    const [selected, setSelected] = useState([]);

    function handleClick(val) {
        if (selected.includes(val)) {
            setSelected(selected.filter(ele => ele !== val));
        } else {
            setSelected([...selected, val])
        }
    }

    return (
        <div className="sorts">
            <ComparisonHeader selected={selected}/>
            {Object.keys(sorts).map((sortname, i) => 
                <Card info={sorts[sortname]} name={sortname} key={i} handleClick={val => handleClick(val)}/>
            )}
        </div>
    )
}