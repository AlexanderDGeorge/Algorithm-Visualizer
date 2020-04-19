function countingSort(arr, min, max) {
    let j = 0;
    let count = [];
    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }
    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
}