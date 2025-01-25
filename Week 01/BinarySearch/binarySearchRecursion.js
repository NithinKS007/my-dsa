const binarySearch = (arr, target, leftIndex = 0, rightIndex = arr.length - 1) => {
    if (leftIndex > rightIndex) {
        return -1;
    }
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (target < arr[mid]) {
        return binarySearch(arr, target, leftIndex, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, rightIndex); 
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); 
