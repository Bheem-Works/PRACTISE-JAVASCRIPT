// let prime 
function r(s) {
  if(s<=1) {
    return `${s} This is not any prime number`
  }

  let isprime = 1;
  for(let i = 2; i<=Math.sqrt(s); i++) {
    if(s%i===0) {
      isprime = 0;
      break;
    }
  }
  if(isprime===1) {
    return `${s} this is  prime number` ;
  } else {
    return `${s} this is  composite number` ;
  }
}
console.log(r(9));
console.log(r(3));



let a = [2,3,4];
a= a.map(num=>num+1);
console.log(a);