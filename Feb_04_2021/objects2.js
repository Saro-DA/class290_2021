


const obj1 = {
    first_name: "Saro",
    last_name: "Deravanesian",

    job_info: {
        title: "SSE",
        experience: 14
    }
}

const keys = Object.keys(obj1);

console.log(keys);

const values = Object.values(obj1);

console.log(values);

const { first_name, last_name } = obj1;

console.log(first_name);
console.log(last_name);