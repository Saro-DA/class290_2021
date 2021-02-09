
function person() {
    console.log("this is just a function");
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("Hello World!");
    }
}

const p1 = new Person("Arthur", 30); // this keyword gets instantiated here.

console.log(p1.name);

p1.sayHello();

