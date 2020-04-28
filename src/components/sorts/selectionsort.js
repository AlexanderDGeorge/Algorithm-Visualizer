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
            elements[j].style.background = '#FF4949';
            elements[min].style.background = '#FF4949';

            await new Promise(resolve => 
                setTimeout(() => {
                    resolve()
                }, delay * 1000)
            )

            const value1 = Number(elements[j].childNodes[0].innerHTML);
            const value2 = Number(elements[min].childNodes[0].innerHTML);

            if (value2 > value1) {
                min = j;
            }
        }
        if (min !== i) {
            await swap(elements[i], elements[min]);
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