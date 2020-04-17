import React from 'react';
import ComparisonCard from '../comparison_card/comparison_card';
import './sorts.css'

const sorts = [
    'Bubble Sort', 'Recursive Bubble', 'Selection Sort', 'Insertion Sort', 'Recursive Insertion Sort', 'Merge Sort', 'Iterative Merge Sort',
    'Quick Sort', 'Iterative Quick Sort', 'Heap Sort', 'Counting Sort', 'Radix Sort', 'Bucket Sort', 'Shell Sort', 'Tim Sort', 'Comb Sort',
    'Pigeonhole Sort', 'Cycle Sort', 'Cocktail Sort', 'Strand Sort', 'Bitonic Sort', 'Pancake Sort', 'Binary Insertion Sort', 
    'Permutation Sort', 'Gnome Sort', 'Sleep Sort'
];

export default function Sorts() {
    return (
        <div className="sorts">
            {sorts.map((sort, i) => <ComparisonCard name={sort} key={i}/> )}
        </div>
    )
}