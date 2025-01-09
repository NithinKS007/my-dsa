const insertionSortByAge = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1; 
       
        while (j >= 0 && arr[j].age > key.age) {
            arr[j + 1] = arr[j]; 
            j--;
        }
        arr[j + 1] = key; 
    }
    return arr;
}

console.log(insertionSortByAge([{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Doe", age: 28 }])); 
