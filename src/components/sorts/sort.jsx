import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../nav/navbar';
import SortOptions from './sort-options';
import bubblesort from './bubblesort'
import selectionsort from './selectionsort';
import insertionsort from './insertionsort';
import mergesort from './mergesort';
import quicksort from './quicksort';
import heapsort from './heapsort';
import countingsort from './countingsort';
import radixsort from './radixsort';
import './sort.css';

export default function Sort() {

    const [length, setLength] = useState(20);
    const [delay, setDelay] = useState(1.00);
    const [array, setArray] = useState([]);
    const location = useLocation();
    const pathname = location.pathname.slice(7);

    useEffect(() => {
      document.title = `Algorithm Visualizer - ${pathname}`;
    }, [pathname])

    function handleRun() {
        switch (pathname) {
            case 'bubblesort':
                bubblesort(delay);
                break;
            case 'selectionsort':
                selectionsort(delay);
                break;
            case 'insertionsort':
                insertionsort(delay);
                break;
            case 'mergesort':
                mergesort(delay);
                break;
            case 'quicksort':
                quicksort(delay);
                break;
            case 'heapsort':
                heapsort(delay);
                break;
            case 'countingsort':
                countingsort(delay);
                break;
            case 'radixsort':
                radixsort(delay);
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
                delay={delay}
                setLength={val => setLength(val)}
                setDelay={val => setDelay(val)}
                setArray={val => setArray(val)}
                run={handleRun}
            />
            <div className='array'>
                {array.map((element, i) => (
                    <div 
                        className='element' key={i} 
                        style={{ height: element * 3, width: 30, x: i * 30 }}>
                        {element}
                    </div>
                ))}
            </div> 
        </div>
    )
}

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