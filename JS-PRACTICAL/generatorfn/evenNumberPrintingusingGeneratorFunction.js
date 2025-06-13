function* even(ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] % 2 === 0) {
      yield ar[i];
    }
  }
}

const ar = [2, 4, 56, 9];
const result = even(ar);

for (const num of result) {
  console.log(num);
}
