


const arr1 = [2, 3, 1, 0, true, [1, 2, 3], {name: "Saro"}];

// method 1: using a for loop with array index.
for(let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
}

console.log('-------------------');

// method 2: using in keyword
for(let index in arr1) {
    console.log(arr1[index]);
}

console.log('-------------------');

// method 3: using of keyword
for(let element of arr1) {
    console.log(element);
}