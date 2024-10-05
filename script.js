console.log("=== Завдання 1 ===");

// for
console.log("Цикл for:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while
console.log("Цикл while:");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("=== Завдання 2 ===");

const mixedArray = [
  42,
  "hello",
  true,
  3.14,
  "world",
  false,
  null,
  undefined,
  100,
  "JavaScript",
];

// forEach
console.log("Метод forEach:");
mixedArray.forEach((element) => {
  console.log(typeof element);
});

// for
console.log("Циклом for:");
for (let i = 0; i < mixedArray.length; i++) {
  console.log(typeof mixedArray[i]);
}

// while
console.log("Циклом while:");
let j = 0;
while (j < mixedArray.length) {
  console.log(typeof mixedArray[j]);
  j++;
}

// do while
console.log("Циклом do while:");
let k = 0;
do {
  console.log(typeof mixedArray[k]);
  k++;
} while (k < mixedArray.length);
