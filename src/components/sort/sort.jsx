import React from 'react';
import NavBar from '../nav/navbar';
import { useSprings, animated } from 'react-spring';
import './sort.css';

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

const array = [5,4,3,2,1];

export default function Sort() {
    return ( 
        <div className='sort'>
            <NavBar />
            <BubbleSortAnimation array={array}/>
        </div>
    )
}

function BubbleSortAnimation(props) {

    let { array } = props;

    function bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    let temp = arr[i];
                    arr[i] = arr[j+1];
                    arr[j+1] = temp;
                }
                setSprings(arr)
            }
        }
        return arr;
    }

    function setStyle(index) {
        const ele = array[index];
        return { x: index * 50, height: ele * 10 + 10, width: 50, background: 'red' }
    }

    const [springs, setSprings] = useSprings(array.length, index => setStyle(index));

    return (
        <div className="array">
            {springs.map(spring => {
                return <animated.div style={spring}/>
            })}
        </div>
    )
}