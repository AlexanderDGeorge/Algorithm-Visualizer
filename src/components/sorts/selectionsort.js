export default async function selectionSort(delay) {
    let elements = document.querySelectorAll('.element');
    let container = document.querySelector('.array');

    function swap(el1, el2) {
        return new Promise(resolve => {
            const style1 = window.getComputedStyle(el1);
            const style2 = window.getComputedStyle(el2);

            const transform1 = style1.getPropertyValue('transform');
            const transform2 = style2.getPropertyValue('transform');

            el1.style.transform = transform2;
            el2.style.transform = transform1;

            window.requestAnimationFrame(function() {
                setTimeout(() => {
                    container.insertBefore(el2, el1);
                    resolve();
                }, 100);
            });
        });
    }

    for (let i = 0; i < elements.length; i++) {
        let min = i;
        for (let j = i + 1; j < elements.length; j++) {
            elements[min].style.background = 'blue';
            elements[j].style.background = 'blue';

            await new Promise(resolve => 
                setTimeout(() => {
                    resolve()
                }, delay * 1000)
            )

            if (Number(elements[j].innerHTML) < Number(elements[min].innerHTML)) {
                elements[min].style.background = 'red';
                min = j;
                elements[min].style.background = 'blue';
            } else {
                elements[j].style.background = 'red';
            }
        }
        if (min !== i) {
            elements[i].style.background = 'blue';
            await swap(elements[i], elements[min]);
            elements = document.querySelectorAll('.element');
            elements[i].style.background = 'green';
        } else {
            elements[i].style.background = 'green';
        }
    }
}

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[min] > arr[j]) {
//                 min = j;
//             }
//         }
//         if (min !== i) {
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }