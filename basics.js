/* 
  
1. variable declaration: var, let and const

    > var:  Accessed throughout the function and does not respect blocked boundaries such as if and for 
            can be declared multiple times

    > let: only accessible inside the block it is defined.
           cannot declare same varible twice. 
           safer and more predictable.

    > const: blocked scope and value cannot be reassigned.
             It makes the reference immutable not the value
             Allowed:
             >     const x = {name: 'Nikhil'}
                   x.name = 'Singh'
             NOT ALLOWED:
             >     const x = 3; x= 2; 


2. data types: 

    Number	let a = 42;
    String	let s = "Hello";
    Boolean	let flag = true;
    Object	let obj = { name: "John" };
    Array	let arr = [1, 2, 3];
    Null	let a = null;
    Undefined	let b; // undefined
    Symbol	let sym = Symbol();  -> It is a unique, immutable value, often used as object property keys.

    eg: const sym = Symbol('id');
        const user = {
        [sym]: 123
        };


3. Comparison Operators:

    == 	Compares values, not types
    ===	Compares values AND types (strict)
    !=	Not equal (loose)
    !==	Not equal (strict)

    eg: 0 == false    // true
        0 === false   // false

        '5' == 5      // true
        '5' === 5     // false

4. Function declaration: 

        function f1(name){
                console.log("hello " + name);
        }

        can also be wriiten as: 

        const func = function f1(name) {}

        Arrow functions uses same ideology: 
        const func = (name) => {}


5. Objects and Arrays

        const person = {
        name: "Alice",
        age: 25,
        };

        console.log(person.name); // Alice

        const numbers = [1, 2, 3];
        numbers.push(4);
        console.log(numbers[2]); // 3

6. 6. Loops

        for (let i = 0; i < 5; i++) {
            console.log(i);
        }

        for (let item of [10, 20, 30]) {
            console.log(item);
        }

        for (let key in person) {
            console.log(key + ": " + person[key]);
        }

7. 9. JavaScript is Dynamically Typed
        let a = 5;     // number
        a = "Hello";   // now a string
*/



const nums  = [1,2,3,4,5];
nums.push(6);


// map() func is an array method that creates a new array by applying a callback function to each element
let squared= nums.map( (e) => Math.pow(e, 2));

nums.forEach( (n) => { console.log(n*n)});

// reduce function returns a single value
let sum = nums.reduce( (s, n) => {return s + n}, 0);  // 0 is the initial value of s

console.log(squared);
console.log(sum)




