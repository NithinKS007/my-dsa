const selectionSortObjects = (arr, key) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j][key] < arr[indexOfMin][key]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
        }
    }

    return arr;
}


const objectsArray = [
    { id: 1, value: 20 },
    { id: 2, value: -2 },
    { id: 3, value: 4 },
    { id: 4, value: -6 },
    { id: 5, value: 8 }
];

console.log("Sorted array by value: ", selectionSortObjects(objectsArray, 'value'));
