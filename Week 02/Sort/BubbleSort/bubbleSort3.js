const bubbleSortNumberOfComparisons = (arr) => {
    let numberOfComparisons = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            numberOfComparisons++; 

            if (arr[j] > arr[j + 1]) {
              
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return {
        numberOfComparisons: numberOfComparisons,
        sortedArray: arr
    };
}

console.log(bubbleSortNumberOfComparisons([8, 20, -2, 4, -6]));
