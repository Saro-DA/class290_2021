


let age = 10;
testValid(age);

age = false;
testValid(age);

age = '';
testValid(age);

age = undefined;
testValid(age);

age = null;
testValid(age);

age = [];
testValid(age);

function _testValid(variable) {
    console.log(`${variable} is Truthy or falsy? ${!!variable}`);
}

function testValid(variable) {
    console.log(`${variable} is ${variable ? 'Truthy' : 'Falsy'}`);
}