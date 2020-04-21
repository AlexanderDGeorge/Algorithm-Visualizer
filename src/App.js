import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Help from './components/help/help';
import BubbleSort from './components/sorts/bubblesort';
import SelectionSort from './components/sorts/selectionsort';
import InsertionSort from './components/sorts/insertionsort';
import MergeSort from './components/sorts/mergesort';
import QuickSort from './components/sorts/quicksort';
import HeapSort from './components/sorts/heapsort';
import CountingSort from './components/sorts/countingsort';
import RadixSort from './components/sorts/radixsort';

export default function App() {
    return (
        <div id='app'>
            <HashRouter>
                <Switch>
                    <Route path='/bubblesort' component={BubbleSort}/>
                    <Route path='/selectionsort' component={SelectionSort} />
                    <Route path='/insertionsort' component={InsertionSort} />
                    <Route path='/mergesort' component={MergeSort} />
                    <Route path='/quicksort' component={QuickSort} />
                    <Route path='/heapsort' component={HeapSort} />
                    <Route path='/countingsort' component={CountingSort} />
                    <Route path='/radixsort' component={RadixSort} />
                    <Route path='/help' component={Help} />
                    <Route path='/' component={Home} />
                </Switch>
            </HashRouter>
        </div>
    )
}