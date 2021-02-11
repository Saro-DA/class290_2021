


const name = "Saro";
const lastName = "Deravanesian"


const person = {
    name,
    lastName,
    printHello() {
        console.log('hello');
    },
    printWorld: () => {
        console.log('world');
    }
}

person.printHello();
person.printWorld();