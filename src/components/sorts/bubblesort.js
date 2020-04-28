export default async function bubbleSort(delay) {
    let elements = document.querySelectorAll('.element');
    let container = document.querySelector('.array');

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
            }, delay * 1000);
          });
        });
    }
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements.length - i - 1; j++) {
            elements[j].style.background = 'blue';
            elements[j + 1].style.background = 'blue';

            await new Promise(resolve => 
                setTimeout(() => {
                    resolve()
                }, delay * 1000)
            )

            if (Number(elements[j].innerHTML) > Number(elements[j + 1].innerHTML)) {
                await swap(elements[j], elements[j + 1]);
                elements = document.querySelectorAll('.element');
            }

            elements[j].style.background = 'red';
            elements[j + 1].style.background = 'red';
        }
        elements[elements.length - i - 1].style.background = 'green';
    }
}