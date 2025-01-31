// 8A. Let's say in the Amazon Project, who.we have a basketball product. This product has a name or basketball, a prize of twenty ninety five cents.
//  Create an object to represent this product and display it in the console.
 
// // let products = {name:'baskestball',price : '50 cents'}
// // console.log(products);


//  8B. continuing from 8A?Let's say we want to increase the price by 500 cents. Use notation to increase the price and display the updated object in the console.
    // let one = {
    //     aa : "Dell",
    //     bp : 500
    // } 
    // let two = {
    //     ab : "hp",
    //     ap : 1500
    // };
    
    // one.bp +=two.ap;
    // console.log((one.bp));
    

// 8C dot using a bracket notation. Add a property time to the object with a value 3 days. Display the updated object in the console.

    //  let myObject = {};
    //  myObject['name'] = 'vim magar';
    //  console.log(myObject.name);

// 8d.creator function compare price product warn product to which takes two products with name and price properties and return the products that is less expensive. 
// create. 2 products and try out the function.

    // let product1   = {
    //     name : "basketball",
    //     price : 20.95
    // };
    // let product2 = {
    //     name : "soccer ball",
    //     price: 15.99
    // }
    // function compare(productA,productB) {
    //     if(productA.price< productB.price) {
    //         return productA;
    //     } else {
    //         return productB
    //     }
    // }
    
    // let cheaperProduct = compare(product1,product2);
    // console.log("The less expensive product is:",cheaperProduct);
    

//  8e. create a function is same product, product one, product 2 which returns to if two products have the same values inside names and price. 
//  If not return false, create two products and try out the functions hint. Objects are different, so you can compare them FileSystemDirectoryHandle
        // function isSame(product1,product2) {
        //     return product1.name===product2.name&&product1.price===product2.price;
        // }
        // let product1 = {
        //     name : 'dell',
        //     price : 3000
        // }
        // let product2 = {
        //     name : 'dell', 
        //     price : 3000
        // }
        // let product3 = {
        //     name : 'hp',
        //     price : 5000
        // }
        // console.log(isSame(product1,product2));
        // console.log(isSame(product1,product3));

//  8F using Google R and ai tool starts how to convert a string to all lowercases with Java script. Good morning to good morning in lower case.
    // let str = 'Good Morning';
    // let lowercases = str.toLowerCase();
    // let uppercase = str.toUpperCase();
    // console.log(lowercases);
    // console.log(uppercase);
    

//  8G.starts how to repeat a string many times. Test two times.is equal to test.A
    // let str = 'miso';
    // let repeat = str.repeat(2);
    // console.log(repeat);

//  8h. at We will air locally storage to the calculator project.First, make a copy of the project from exercise 

//  8K.use local storage to save and load the score into you will need to use this and string if I have to convert the score object into a string
//  Create two buttons to play the games head tails. When clicking, here's play the games with the guest heads. When clicking tails, 
//  place the game with guest tails. Kara functions, play games, guest studio is the codes.8J create.a score object will loses. Update a score screen.
//  name after playing and display this course in the console.


// console.log("JSON stands for JavaScript Object Notation. It's a lightweight data format used for storing and transporting data. JSON is often used when data is sent from a server to a web page.")
     
let vim = {
    vim : 'vim is a good',
    age : 19, class : 11 , skill : 'master in every', character : 'perfect'

}

let string = JSON.stringify(vim); // stringify : convert into JSON
console.log(string);

let jsonObject = JSON.parse(string); // JSON.parse : it converts into objects
console.log(jsonObject);

// Store data
localStorage.setItem('name', 'John Doe');

// Retrieve data
let storedName = localStorage.getItem('name');
console.log(storedName); // Outputs 'John Doe'

// Remove data
localStorage.removeItem('name');

// Clear all data
localStorage.clear();
