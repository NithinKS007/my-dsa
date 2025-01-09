function merge(left, right, key) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex][key] < right[rightIndex][key]) {
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

function mergeSort(array, key) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left, key), 
        mergeSort(right, key), 
        key
    );
}

const peopleByAge = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 28 }
];
console.log("Sorted by age:", mergeSort(peopleByAge, 'age'));

