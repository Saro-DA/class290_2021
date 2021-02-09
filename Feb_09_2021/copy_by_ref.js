

const obj = {
    a: 10
}

obj.b = "Hello";

// obj = 10; // ERROR!

function foo(obj) {
    obj.a++;
}

foo(obj);

console.log(obj.a);