function hello() {
  console.log("hello my name is miso ");
}
hello();

function name(xio) {
  return `my name is ${xio}`;
}
name("miso");

function num(a, b) {
  return a * b;
}
console.log(num(2, 3));

const a = () => "name is marker";
console.log(a());

const j = (c, d) => {
  return c + d;
};
console.log(j(7, 8));

// argument : it works the pass the value between the code and the programs

let m = [1, 2, 3, 4];
let n = [1, 2, 3, 4];
console.log(m.concat(n));
console.log(m.push(9));
console.log(m.pop());
console.log(m.unshift(7));
console.log(m.shift());
console.log(m.length);
console.log(m.join(","));

// loops in arrays methods
let s = [1, 2, 3, 4, 5];

for (let i = 1; i <= s.length; i++) {
  if (s[i] == 2) {
    console.log("The array value is 2");
  }
  console.log("good");
}

// use function and make a odd even
