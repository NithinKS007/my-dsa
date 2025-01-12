const binarySearch = (arr, t) => {
    arr.sort((a, b) => a - b);  
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2); 

        if (arr[middleIndex] === t) {
            return middleIndex; 
        }
        if (t < arr[middleIndex]) {
            rightIndex = middleIndex - 1; 
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 3, 2, 5, 8], 5))
