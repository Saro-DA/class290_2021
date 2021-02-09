

Number.prototype.cube = function() {
    return this * this * this;
}

const myNumber = 3;

console.log(myNumber.cube());


const name1 = "Hagop";
const name2 = "Aram";

const name3 = "Saro";

String.prototype.countA = function() {
    let count = 0;
    for(let i = 0; i < this.length; i++) {
        if(this[i] === 'a' || this[i] === 'A') count++;
    }

    return count;
}

console.log(name2.countA());
console.log(name3.countA());