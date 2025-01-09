const quickSort = (arr) => {
    if (arr.length < 2) {

        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}
const fruits = ["banana", "apple", "kiwi", "orange", "grape"];
console.log("Sorted array :", quickSort(fruits));
