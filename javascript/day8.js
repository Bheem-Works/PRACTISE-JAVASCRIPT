// loops in arrays
let randomnumbers = 0;
while (randomnumbers < 0.5) {
  randomnumbers = Math.random();
}
console.log(randomnumbers);

// length through an arrays
const miso = ["fish", "meat", "hopper"];
for (i = 0; i < miso.length; i++) {
  const value = miso[i];
  console.log(value);
}

// accumalator : the acumaltor means it collects the total value and later it add.
// for example like you are having the 3 index in arrays so what accumalator do that it takes the value of 3 index what in the arrays and later it add the numbers the same index 3 what is in array index

let numbers = [1, 2, 3];
let totalsum = 0;

for (let i = 0; i < numbers.length; i++) {
  totalsum += numbers[i];
}
console.log(totalsum);


