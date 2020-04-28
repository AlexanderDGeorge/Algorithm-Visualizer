export default async function insertionsort(delay) {
    let elements = document.querySelectorAll('.element');
    let container = document.querySelector('.array');

    function insert(el1, el2) {
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
                }, delay * 1000);
            });
        });
    }

    for (let i = 0; i < elements.length; i++) {
        let key = elements[i];
        key.style.background = 'blue';

        for (let j = i - 1; j > 0; j--) {
            elements[j].style.background = 'blue';
            
            await new Promise(resolve => 
                setTimeout(() => {
                    resolve()
                }, delay * 1000)
            )

            if (Number(elements[j].innerHTML) > Number(key.innerHTML)) {
                elements[j].style.background = 'red';
            } else {
                await insert(key, elements[j]);
                elements = document.querySelectorAll('.element');
                break;
            }
        }

        key.style.background = 'red';
    }
}

// function insertionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
//     return arr;
// }