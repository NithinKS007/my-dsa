const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};

const heapify = (array, index, length = array.length) => {
    let largest = index,
        left = index * 2 + 1,
        right = index * 2 + 2;

    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== index) {
        swap(array, index, largest);
        heapify(array, largest, length);
    }

    return array;
};

const heapSort = (array) => {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) { 
        heapify(array, i); 
    }
    for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i);
        heapify(array, 0, i);
    }
    return array;
};


const arr = [-1, 3, -2, 5, 0];
console.log(heapSort(arr)); 
