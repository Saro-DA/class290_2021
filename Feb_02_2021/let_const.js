

// var - can be recreated and reassigned
// let - can NOT be recreated but CAN be reassigned
// const - can NOT be recreated AND CAN NOT be reassigned

const condition = true;
foo();

function foo() {
    // console.log(name); this will throw an error.

    if(condition) {
        let name = "Saro";
        name = 123;
        console.log(name);
    }

    // console.log(name); this will throw an error.
}