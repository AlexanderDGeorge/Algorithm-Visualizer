// const sorts = {
//     'bubble sort': { 'best': 'n', 'avg': 'n^2', 'worst': 'n^2', 'space': '1' },
//     'selection sort': { 'best': 'n^2', 'avg': 'n^2', 'worst': 'n^2', 'space': '1' },
//     'insertion sort': { 'best': 'n', 'avg': 'n^2', 'worst': 'n^2', 'space': '1' },
//     'merge sort': { 'best': 'nlogn', 'avg': 'nlogn', 'worst': 'nlogn', 'space': 'n' },
//     'quick sort': { 'best': 'nlogn', 'avg': 'nlogn', 'worst': 'n^2', 'space': 'nlogn' },
//     'heap sort': { 'best': 'nlogn', 'avg': 'nlogn', 'worst': 'nlogn', 'space': '1' },
//     'counting sort': { 'best': 'n+k', 'avg': 'n+k', 'worst': 'n+k', 'space': 'k' },
//     'radix sort': { 'best': 'n*k', 'avg': 'n*k', 'worst': 'n*k', 'space': 'n+k' },
// }

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../nav/navbar';
import SortOptions from './sort-options';
import bubblesort from './bubblesort';
import './sort.css';

export default function Sort() {

    const [length, setLength] = useState(10);
    const [delay, setDelay] = useState(5.00);
    const [array, setArray] = useState([]);
    const location = useLocation();
    const pathname = location.pathname.slice(7);
    console.log(pathname);    

    function handleRun() {
        switch (pathname) {
            case 'bubblesort':
                bubblesort(delay);
                break;
            case 'selectionsort':
                break;
            case 'insertionsort':
                break;
            case 'mergesort':
                break;
            case 'quicksort':
                break;
            case 'heapsort':
                break;
            case 'countingsort':
                break;
            case 'radixsort':
                break;
            default:
                bubblesort(delay);
        }
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
            <div className='array'>
                {array.map((element, i) => (
                    <div className='element' key={i}>
                        <label>{element}</label>
                        <div style={{ height: element * 3, width: 30, x: i * 30 }}/>
                    </div>
                ))}
            </div> 
        </div>
    )
}