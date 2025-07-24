
# JavaScript Basics Cheatsheet

This guide helps Java developers understand the fundamentals of JavaScript, with examples and comparisons to familiar Java concepts.

---

## 1. Variable Declaration: `var`, `let`, and `const`

| Keyword | Scope             | Re-declaration | Reassignment | Notes |
|---------|------------------|----------------|--------------|-------|
| `var`   | Function-scoped   | ✅ Yes         | ✅ Yes       | Avoid in modern JS |
| `let`   | Block-scoped      | ❌ No          | ✅ Yes       | Safer and predictable |
| `const` | Block-scoped      | ❌ No          | ❌ No        | Reference is constant, but value can be mutable |

```js
var x = 10;
let y = 20;
const z = 30;
```

### Example: `const` is immutable in reference, not in value
```js
const user = { name: "Nikhil" };
user.name = "Singh"; // ✅ Allowed

const a = 3;
a = 2; // ❌ Not allowed
```

---

## 2. Data Types

| Type       | Example                     |
|------------|-----------------------------|
| Number     | `let a = 42;`               |
| String     | `let s = "Hello";`          |
| Boolean    | `let flag = true;`          |
| Object     | `let obj = { name: "John" };` |
| Array      | `let arr = [1, 2, 3];`      |
| Null       | `let a = null;`             |
| Undefined  | `let b;`                    |
| Symbol     | `let sym = Symbol("id");`   |

### Example with `Symbol`: It is a unique, immutable value, often used as object property keys.

```js
const sym = Symbol("id");
const user = {
  [sym]: 123
};
```

---

## 3. Comparison Operators

| Operator | Meaning                              | Example         | Result   |
|----------|--------------------------------------|------------------|----------|
| `==`     | Loose equality (value only)          | `0 == false`     | `true`   |
| `===`    | Strict equality (value + type)       | `0 === false`    | `false`  |
| `!=`     | Loose inequality                     | `'5' != 5`       | `false`  |
| `!==`    | Strict inequality                    | `'5' !== 5`      | `true`   |

---

## 4. Function Declarations

### Named Function
```js
function greet(name) {
  console.log("Hello " + name);
}
```

### Function Expression
```js
const greet = function(name) {
  console.log("Hello " + name);
};
```

### Arrow Function
```js
const greet = (name) => {
  console.log("Hello " + name);
};
```

---

## 5. Objects and Arrays

### Object
```js
const person = {
  name: "Alice",
  age: 25,
};

console.log(person.name); // Alice
```

### Array
```js
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]); // 3
```

---

## 6. Loops

### For loop
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### For...of (Arrays)
```js
for (let item of [10, 20, 30]) {
  console.log(item);
}
```

### For...in (Objects)
```js
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

---

## 7. JavaScript is Dynamically Typed

Variables can change type at runtime.

```js
let a = 5;       // number
a = "Hello";     // now a string
```
## 8. JavaScript Array Methods Comparison

Here's a quick comparison of four essential array methods in JavaScript: `.map()`, `.forEach()`, `.filter()`, and `.reduce()`.

###  Overview Table

| Method       | Returns         | Purpose                                  | Mutates Original? |
|--------------|------------------|------------------------------------------|--------------------|
| `.map()`     | New array        | Transform each element                   | ❌ No              |
| `.forEach()` | `undefined`      | Run code for each element (side effects) | ❌ No              |
| `.filter()`  | New array        | Keep elements that match condition       | ❌ No              |
| `.reduce()`  | Single value     | Reduce array to a single value           | ❌ No              |

---

### 1. `.map()` – Transform each item

```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

---

### 2. `.forEach()` – Just do something

```js
const nums = [1, 2, 3];
nums.forEach(n => console.log(n));
```

---

### 3. `.filter()` – Keep what matches

```js
const nums = [1, 2, 3, 4, 5];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```

---

### 4. `.reduce()` – Summarize into one value

```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

---

## Summary

- Use `let` and `const` instead of `var`
- Always prefer `===` over `==`
- JavaScript types are dynamic and flexible
- Functions can be declared in multiple ways
- Learn scope: block vs function
- Use `for...of` and `for...in` wisely with arrays and objects

---

```js
.map()     => transforms → [a, b, c] → [x, y, z]
.forEach() => does something for each → no return
.filter()  => keeps only what matches → [a, b, c]
.reduce()  => accumulates into one value → X
```

