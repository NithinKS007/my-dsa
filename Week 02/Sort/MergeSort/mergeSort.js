function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle); 
    const right = array.slice(middle); 

    return merge(
        mergeSort(left), 
        mergeSort(right) 
    );
}
function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; 
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; 
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

console.log("Sorted array : ",mergeSort([8, 20, -2, 4, -6]));
