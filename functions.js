// function add(a,b) {
//     return a + b;
//  }
// const numbers = add(2,4);
// console.log(numbers);

// function multi(x){
//     return x * 2;
// }
// const result = multi(2)+ multi(2);
// console.log(result);

// function miso(x) {
//     return x*x;
// }
//  console.log(miso(2));
//  console.log(miso(4));

function miso(a) {
  let b = 9;
  if (b > a) {
    return `${b} is greater than &{a}`;
  } else {
    return `${a} is smaller than ${b}`;
  }
}
console.log(miso(19));
console.log(miso(10));

// math radius functions
function math(radius) {
  return Math.PI * radius * radius;
}
const area = math(2);
console.log(area);
