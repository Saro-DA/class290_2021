


setTimeout(function() {
    console.log("Calling a function after 3 seconds.");
}, 3000);

const cars = ["BMW", "TOYOTA", "MAZDA"];

cars.forEach(function(car) {
    console.log(car);
})

const values = [2, 3, 5, 6, 4, 1, 0, 5, 7, 3, 12];

const evens = values.filter(function(element) {
    return element % 2 === 0;
})

console.log(evens);

const cubes = values.map(function(element) {
    return element * element * element;
})

console.log(cubes);