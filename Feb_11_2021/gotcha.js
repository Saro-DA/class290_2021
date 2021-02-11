
const cars = ["BMW", "Toyota", "Mazda"];

for(let i in cars) {
    setTimeout(() => {
        console.log(cars[i]);
    }, 2000);
}