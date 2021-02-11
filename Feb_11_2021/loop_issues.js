

const cars = ["BMW", "Toyota", "Mazda"];

for(let index in cars) {
    console.log(cars[index]);
    index--;
}


for(let index = 0; index < cars.length; index++) {
    console.log(cars[index]);
    // index--; will cause an infinite loop.
}
