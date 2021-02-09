

function foo() {

    const person = {
        name: "Armen",
        lastName: "Gevorgyan",
        age: 29,
        city: "Yerevan",
        country: "Armenia",
        car: {
            name: "BMW"
        }
    }

    const classTaken = {
        year: 2021,
        building: "main",
        ...person
    }

    classTaken.name = "Tigran";

    console.log(person.name);

    printName(classTaken);
    printCity({ ...classTaken, date: new Date() });

    
}

function printName({ name, lastName }) {
    console.log(`${name} ${lastName}`);
}

function printCity({ city, country, date, car }) {
    console.log(`${car.name} ${city} ${country} ${date}`);
}

foo();