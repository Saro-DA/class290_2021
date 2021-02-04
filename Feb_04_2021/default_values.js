


const nameFromDB = '';


let result = nameFromDB || '' || 10 || 0;


console.log(result);


const person = {
    name: "Saro"
};

// const name = person && person.name;

const name = person?.name;

console.log(name);

