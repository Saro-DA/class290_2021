

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

}

class Doctor extends Person {
    constructor(firstName, lastName, title) {
        super(firstName, lastName);
        this.title = title;
    }

    printTitle() {
        console.log(`${this.title}`);
    }
}

const p1 = new Person("Saro", "Deravanesian");

p1.printFullName();

const d1 = new Doctor("Arthur", "Grigoryan", "Pediatric");

d1.printFullName();
d1.printTitle();