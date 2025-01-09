const bubbleSortOfObjects = (arr,ageProperty) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {

        if(arr[j][ageProperty] > arr[j+1][ageProperty]){

            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
  }
  return arr
};

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 20 },
    { name: 'Doe', age: 30 },
];

console.log(bubbleSortOfObjects( people,"age"));
