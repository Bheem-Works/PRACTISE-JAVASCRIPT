function a(v) {
    if(v<=1) {
        return`${v} This is not any numbers`;
    }
    let isprime = 1;

    for(let i = 2; i<=Math.sqrt(v);i++) {
        if(v%i===0) {
            
            isprime = 0;
            break;
        }
       
    }

    if(isprime===1) {
        return ` ${v} this is a prime number`;
    } else {
       return `${v} this is a compostie numbers`;
    }
}

console.log(a(9));
console.log(a(8));



// once again 

function m(s) {
    if(s<=1) {
        return `${s} This is not a prime`;
    }
    let injuck = 1;
    
    for(let i = 2; i<=Math.sqrt(s); i++) {
        if(s%i===0) {
            injuck = 0;
            break;
        }
    }

    if(injuck===1) {
        return `${s} This is a prime number`;
    } else {
        return `${s} This is a composite number`;

    }
}

console.log(m(10));
console.log(m(2));