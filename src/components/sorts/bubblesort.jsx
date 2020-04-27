import React, { useState } from 'react';
import './sort.css';
import NavBar from '../nav/navbar';
import SortOptions from './sort-options';

export default function BubbleSort(props) {

    let container;
    const [length, setLength] = useState(10);
    const [delay, setDelay] = useState(5.00);
    const [array, setArray] = useState([]);

    function handleRun() {
        container = document.querySelector('.array');
        bubbleSort();
    }

    function swap(el1, el2) {
        return new Promise(resolve => {
          const style1 = window.getComputedStyle(el1);
          const style2 = window.getComputedStyle(el2);
      
          const transform1 = style1.getPropertyValue("transform");
          const transform2 = style2.getPropertyValue("transform");
      
          el1.style.transform = transform2;
          el2.style.transform = transform1;
      
          window.requestAnimationFrame(function() {
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, delay * 100);
          });
        });
    }

    async function bubbleSort() {
        let elements = document.querySelectorAll('.element');
        for (let i = 0; i < elements.length; i++) {
            for (let j = 0; j < elements.length - i - 1; j++) {
                elements[j].style.background = '#FF4949';
                elements[j + 1].style.background = '#FF4949';

                await new Promise(resolve => 
                    setTimeout(() => {
                        resolve()
                    }, delay * 100)
                )

                const value1 = Number(elements[j].childNodes[0].innerHTML);
                const value2 = Number(elements[j + 1].childNodes[0].innerHTML);

                if (value1 > value2) {
                    await swap(elements[j], elements[j + 1]);
                    elements = document.querySelectorAll('.element');
                }

                elements[j].style.background = '#58B7FF';
                elements[j + 1].style.background = '#58B7FF';
            }
            elements[elements.length - i - 1].style.background = '#13CE66';
        }
    }

    function BubbleSortAnimation() {
        return (
        <div className='array'>
            {array.map((element, i) => (
                <div className='element'>
                    <label>{element}</label>
                    <div style={{ height: element * 3, width: 30, x: i * 30 }}/>
                </div>
            ))}
        </div> 
    )}
    
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
            <BubbleSortAnimation />
        </div>
    )
}

function BubbleSortInfo() {
    return (
        <div className='sort-info'>
            
        </div>
    )
}