const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) { 
        let indexOfMin = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {

            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]]
            
        }
    }

    return arr;
}

console.log("Sorted array : ",selectionSort([8, 20, -2, 4, -6])); 
