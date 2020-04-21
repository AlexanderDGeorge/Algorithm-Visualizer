import React, { useState, useEffect } from 'react';
import NavBar from '../nav/navbar';
import './sort.css';

export default function BubbleSort() {

    const container = document.querySelector('.array')

    const [length, setLength] = useState(10);
    const [array, setArray] = useState([]);
    const [delay, setDelay] = useState(1);
    const [run, setRun] = useState(false);

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
            }, 250);
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
                    }, delay)
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

    return (
        <div className='sort'>
            <NavBar />
            <form className='sort-controls'>
                <label>Array Size:</label>
                <input 
                    type="number"
                    value={length}
                    onChange={e => setLength(e.target.value)}
                    placeholder={length}
                />
                <label>Speed:</label>
                <input 
                    type="number"
                    value={delay}
                    onChange={e => setDelay(e.target.value)}
                    placeholder={delay}
                />
                <button onClick={() => generateArray()}>
                    Generate Array
                </button>
                <button onClick={() => bubbleSort()}>
                    Run
                </button>
            </form>
            <div className='array'>
                {array.map((element, i) => (
                    <div className='element'>
                        <label>{element}</label>
                        <div style={{ height: element * 3, width: 30, x: i * 30 }}/>
                    </div>
                ))}
            </div> 
        </div>
    )

}