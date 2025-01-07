// how to find out time 
//7b. continuing from 7add, add a parameter called 'name' to the 'greet' function and display the message:'hello${name'}!
// call the functions few times with the different names

// function bag(name) {
//     return `hello  ${name}`;
// }
// console.log(bag("vim magar"));

// 7c. try calling greet() without a name (it will display 'hello underfined'). Modify the functions so that if'name'is undifined,it will display 'hi there' instead!
    function greet(name) {
    if(name===undefined) {
        console.log("Hi Bhim");
    } else {
        console.log("Hello \n"   + name);
    }
}
    greet();
    greet("  aming");

// 7 d. create a function 'convert to faherenheit(celsius)' that takes a number in degree celsius return a number in degree fahrenheit.
// formula: celcsius = (fahreneit-32 => *5/9
//     convert to celcius(86) => 30

function ctf (celcius){
    let faherenheit = (celcius*9/5) + 32;
    return faherenheit;
}
console.log(ctf(40));


function rtf(range) {
    let cib = (range*2+2) + 4;
    return cib;
}
 console.log(rtf(1));