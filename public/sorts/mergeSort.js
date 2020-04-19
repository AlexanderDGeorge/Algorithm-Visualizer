function merge(left, right) {
    let merged = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) merged.push(left.shift());
        else merged.push(right.shift());
    }
    return merged.concat(left).concat(right);
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    else {
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right))
    }
}