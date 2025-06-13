const sum1 = (ba) => {
  return ba.af.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const ba = { af: [4, 5, 34, 53] };
console.log(sum(ba));

const sum2 = (ab) => {
  return ab.reduce(
    (acc, curr) => {
      acc.po = acc.po + curr.po;
      return acc;
    },
    { po: 0 }
  );
};
const ab = [
  { af: 4, po: 49 },
  { af: 4, po: 49 },
  { af: 4, po: 49 },
  { af: 4, po: 49 },
];

const { po } = sum(ab);
console.log(po);

const sumAllPoValues = (ab) => {
  return ab.reduce((acc, curr) => acc + curr.po, 0);
};

const ca = [
  { af: 4, po: 49 },
  { af: 4, po: 49 },
  { af: 4, po: 49 },
  { af: 4, po: 49 },
];

console.log(sumAllPoValues(ab));

const sum = (ar) => {
  const values = ar.flatMap((obj) => Object.values(obj));
  return values
    .filter((num) => num % 2 === 0)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
};

const ar = [{ a: 1, b: 2, c: 3, d: 4 }];

const flattenAbc = (abc) => {
  return abc.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});
};

const abc = [
  { a: 1, b: 2 },
  { c: 5, d: 6 },
  { e: 8, f: 9 },
];
const result = flattenAbc(abc);
console.log(result);
