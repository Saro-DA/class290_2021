

let a = 10;

let b = a;

a++;

console.log(b); // 10

// primitive types in JS are copied by their values.

foo(a);
function foo(b) {
    b++
}

console.log(a);

