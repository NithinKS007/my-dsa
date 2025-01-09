const quickSort = (arr, key) => {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][key] < pivot[key]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left, key), pivot, ...quickSort(right, key)];
}

const peopleByAge = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 28 }
];
console.log("Sorted by age:", quickSort(peopleByAge, 'age'));
