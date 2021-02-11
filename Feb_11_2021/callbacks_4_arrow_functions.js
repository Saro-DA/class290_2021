
class Util {
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }


    printParam1In3Seconds() {
        // if function keyword is used, this will refer to the instance of
        // the function itself rather than the class scope.
        setTimeout(() => {
            console.log(this.param1);
        }, 3000);
    }
}

const myUtil = new Util(1, 2);

myUtil.printParam1In3Seconds();

// const myFunction = () => {

// }