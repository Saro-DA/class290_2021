
// There are no function overloading in JS!
function foo(var1) {
    console.log(var1);
}

function foo(var1, var2) {
    console.log(var1);
    console.log(var2);
}

// foo();

function printArguments(name, ...args) {

    console.log(name);

    console.log(args);

}

printArguments("Arthur", 20, 30, 40, 50)

printArguments(10, 20)

printArguments(100);

printArguments();